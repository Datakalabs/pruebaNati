<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6">
                <v-sheet v-if="loadingBodies" class="pa-3">
                    <v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="card"
                    ></v-skeleton-loader>
                </v-sheet>
                <v-card v-if="!loadingBodies" class="pa-5">
                    <v-card-title>
                        <v-row>
                            <v-col :cols="12">
                                <div class="text-h6 warning--text">
                                    Selecciona un body
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col
                                v-for="(item, i) in bodies"
                                :key="i"
                                class="text-center"
                            >
                                <img
                                    role="button"
                                    :src="item.imageSrc"
                                    alt=""
                                    @click="
                                        $store.dispatch(
                                            'ejemplo/A_GET_TYPES',
                                            item.id
                                        )
                                    "
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-title>
                        <v-row>
                            <v-col :cols="12">
                                <div class="text-h6 warning--text">
                                    Selecciona un Tipo
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-title>
                </v-card>
            </v-col>
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
            loadingBodies: (state) => state.ejemplo.loading_bodies,
        }),
    },
    beforeMount() {
        if (!this.bodies) this.$store.dispatch('ejemplo/A_GET_BODIES')
    },
}
</script>

<style lang="scss" scoped></style>
