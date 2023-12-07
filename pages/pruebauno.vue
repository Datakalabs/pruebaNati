<template>
    <div>
        <div>
            <v-row>
                <v-col :xl="8" :lg="8" :md="8" :sm="8" :xs="8">
                    <v-card class="pa-5">
                        <v-divider v-if="song || loadingSong"></v-divider>
                        <v-sheet v-if="loadingSong" class="pa-3">
                            <v-skeleton-loader class="mx-auto" max-width="300" type="list-item"></v-skeleton-loader>
                        </v-sheet>
                        <div>
                            <v-text-field v-model="searchQuery" label="Nombre de la canción" append-icon="mdi-magnify" @click:append="searchSong"></v-text-field>
                            <div v-if="loadingSong">Cargando...</div>
                            <div v-if="errorSong">Ocurrió un error durante la búsqueda.</div>
                            <div v-if="song">
                                <h2>Resultado de la búsqueda:</h2>
                                <v-list v-for="(item, index) in song.items" :key="index">
                                    <v-list-item @click="getTrackCredits(item.data.id)">
                                        <v-list-item-content>
                                            <v-list-item-title class="headline">{{ item.data.name }}</v-list-item-title>
                                            <v-list-item-subtitle v-for="(artist, index) in item.data.artists.items" :key="index">Artista: {{ artist.profile.name }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </div>
                            <div v-if="loadingTrackCredits">
                                <v-skeleton-loader class="mx-auto" max-width="300" type="list-item"></v-skeleton-loader>
                            </div>
                            <div v-if="trackCredits">
                                <h2>Créditos de la canción:</h2>
                                <div v-for="(credit, index) in trackCredits.roleCredits" :key="index">
                                    <h3>{{ credit.roleTitle }}</h3>
                                    <div v-for="(artist, index) in credit.artists" :key="index">
                                        <span>{{ artist.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'PruebaUnoPage',
    data() {
        return {
            searchQuery: '',
        }
    },
    computed: {
        ...mapState({
            song: (state) => state.ejemplo.searched_song,
            loadingSong: (state) => state.ejemplo.loading_song,
            errorSong: (state) => state.ejemplo.error_song,
            trackCredits: (state) => state.ejemplo.track_credits,
            loadingTrackCredits: (state) => state.ejemplo.loading_Track_Credits,
        }), // mapeo los diferentes estados
    },
    methods: {
        searchSong() {
            this.$store.dispatch('ejemplo/A_SEARCH_SONG', this.searchQuery) // hago dispatch al store para hacer la consulta
        },
        getTrackCredits(trackId) {
            this.$store.dispatch('ejemplo/A_GET_TRACK_CREDITS', trackId) // hago dispatch al store para hacer la consulta de los créditos de una canción en particular
        },
    },
}
</script>

<style lang="scss" scoped></style>
