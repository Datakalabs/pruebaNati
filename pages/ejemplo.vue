<template>
    <div>
        <v-row>
            <v-col v-if="$vuetify.breakpoint.name !== 'xs'" :xl="2" :lg="1" :md="1" :sm="1"></v-col>
            <v-col :xl="5" :lg="6" :md="6" :sm="6" :xs="8">
                <v-sheet v-if="loadingBodies" class="pa-3">
                    <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                </v-sheet>
                <v-card v-if="!loadingBodies" class="pa-5">
                    <v-card-title>
                        <v-row>
                            <v-col :cols="12">
                                <div class="text-h6 warning--text">Selecciona un body</div>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col v-for="(item, i) in bodies" :key="i" class="text-center">
                                <img role="button" :src="item.imageSrc" alt="" @click="getTypes(item)" />
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider v-if="types || loadingTypes"></v-divider>
                    <v-sheet v-if="loadingTypes" class="pa-3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-sheet>
                    <div v-if="types">
                        <v-card-title>
                            <v-row>
                                <v-col :cols="12">
                                    <div class="text-h6 warning--text">Selecciona un Tipo</div>
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col v-for="(item, i) in types" :key="i" class="text-center">
                                    <v-btn @click="getAssets(item)">{{ capitalize(item.type) }}</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </div>
                    <v-divider v-if="asset || loadingAssets"></v-divider>
                    <v-sheet v-if="loadingAssets" class="pa-3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-sheet>
                    <div v-if="assets">
                        <v-card-title>
                            <v-row>
                                <v-col :cols="12">
                                    <div class="text-h6 warning--text">Selecciona un Asset</div>
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col v-for="(item, i) in assets" :key="i" class="text-center">
                                    <img role="button" :src="item.thumbnailSrc" alt="" @click="generateAvatar()" />
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </div>
                </v-card>
            </v-col>
            <v-col :xl="3" :lg="4" :md="4" :sm="4" :xs="4">
                <v-card class="pa-5">
                    <v-card-title>
                        <v-row>
                            <v-col :cols="12" class="text-center">
                                <div class="text-h6 warning--text">Tu Avatar</div>
                                <div><v-btn x-small color="warning" text @click="reset()">Reset</v-btn></div>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-divider class="mb-2"></v-divider>
                    <v-row v-if="!avatar && !loadingAvatar && !errorAvatar">
                        <v-col cols="12" class="text-center">
                            <img class="rounded-lg" style="opacity: 0.3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppncfz3iPr0Syrey-ltE4zHLfcGcIAeqf4w&usqp=CAU" alt="" />
                        </v-col>
                    </v-row>
                    <v-row v-if="loadingAvatar">
                        <v-col cols="12">
                            <v-sheet v-if="loadingBodies" class="pa-3">
                                <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-row v-if="errorAvatar">
                        <v-col cols="12">
                            <v-alert text type="error">Ha ocurrido un error al generar el avatar</v-alert>
                        </v-col>
                    </v-row>
                    <v-row v-if="errorAvatar">
                        <v-col cols="12" class="text-center">
                            <img src="https://www.doppelme.com/TRANSPARENT/DM1670714VMJWTG/avatar.png" alt="" />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col v-if="$vuetify.breakpoint.name !== 'xs'" :xl="2" :lg="1" :md="1" :sm="1"></v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'EjemploPage',
    data() {
        return {
            body: null,
            type: null,
            asset: null,
        }
    },
    computed: {
        ...mapState({
            bodies: (state) => state.ejemplo.bodies,
            types: (state) => state.ejemplo.types,
            assets: (state) => state.ejemplo.assets,
            loadingBodies: (state) => state.ejemplo.loading_bodies,
            loadingTypes: (state) => state.ejemplo.loading_types,
            loadingAssets: (state) => state.ejemplo.loading_assets,
            loadingAvatar: (state) => state.ejemplo.loading_avatar,
            avatar: (state) => state.ejemplo.generated_avatar,
            errorAvatar: (state) => state.ejemplo.error_avatar,
            searchresults: (state) => state.ejemplo.searchResults,
        }),
    },
    beforeMount() {
        if (!this.bodies) this.$store.dispatch('ejemplo/A_GET_BODIES')
    },
    methods: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        },
        getTypes(item) {
            this.body = item
            this.$store.commit('ejemplo/updateTypes', null)
            this.$store.commit('ejemplo/updateAssets', null)
            this.$store.dispatch('ejemplo/A_GET_TYPES', item.id)
        },
        getAssets(item) {
            this.type = item
            this.$store.commit('ejemplo/updateAssets', null)
            this.$store.dispatch('ejemplo/A_GET_ASSETS', { body: this.body.id, type: item.type })
        },
        generateAvatar() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            this.$store.dispatch('ejemplo/A_CREATE_AVATAR', this.body.id)
        },
        getsearch() {
            this.$store.dispatch('ejemplo/A_GET_SEARCH', { type: item.type }) 

        },
        reset() {
            this.$store.commit('ejemplo/updateTypes', null)
            this.$store.commit('ejemplo/updateAssets', null)
            this.$store.commit('ejemplo/updateTypes', null)
            this.$store.commit('ejemplo/updateErrorAvatar', false)
        },
    },
}
</script>

<style lang="scss" scoped></style>
