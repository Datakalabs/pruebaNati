export const strict = false

export const state = () => ({
    loading_bodies: true,
    loading_types: false,
    loading_assets: false,
    loading_avatar: false,
    bodies: null,
    types: null,
    assets: null,
    generated_avatar: null,
    error_avatar: false,

    searched_song: null, // creo los diferentes estados que luego voy a consumir en el componente
    loading_song: false,
    error_song: false,
    track_credits: null,
    track_id: null,
    loading_Track_Credits: null,
    error_Track_Credits: null,
})

export const actions = {
    A_GET_BODIES({ commit }) {
        commit('updateLoadingBodies', true)
        this.$axios
            .get('https://doppelme-avatars.p.rapidapi.com/bodytypes', {
                headers: {
                    'X-RapidAPI-Key': this.$rapidapi.key,
                    'X-RapidAPI-Host': this.$rapidapi.avatars_host,
                },
            })
            .then((res) => {
                commit('updateLoadingBodies', false)
                commit('updateBodies', res.data.bodytypes)
            })
            .catch(() => {
                commit('updateLoadingBodies', false)
            })
    },
    A_GET_TYPES({ commit, dispatch }, type) {
        commit('updateLoadingTypes', true)
        this.$axios
            .get('https://doppelme-avatars.p.rapidapi.com/assets/' + type, {
                headers: {
                    'X-RapidAPI-Key': this.$rapidapi.key,
                    'X-RapidAPI-Host': this.$rapidapi.avatars_host,
                },
            })
            .then((res) => {
                commit('updateLoadingTypes', false)
                commit('updateTypes', res.data.asset_style)
            })
            .catch(() => {
                commit('updateLoadingTypes', false)
            })
    },
    A_GET_ASSETS({ commit }, data) {
        commit('updateLoadingAssets', true)
        this.$axios
            .get('https://doppelme-avatars.p.rapidapi.com/assets/' + data.body + '/' + data.type, {
                headers: {
                    'X-RapidAPI-Key': this.$rapidapi.key,
                    'X-RapidAPI-Host': this.$rapidapi.avatars_host,
                },
            })
            .then((res) => {
                commit('updateLoadingAssets', false)
                commit('updateAssets', res.data.asset_ids)
            })
            .catch(() => {
                commit('updateLoadingAssets', false)
            })
    },
    A_CREATE_AVATAR({ commit }, body) {
        commit('updateErrorAvatar', false)
        commit('updateLoadingAvatar', true)
        this.$axios
            .post(
                'https://doppelme-avatars.p.rapidapi.com/avatar/' + body,
                {},
                {
                    headers: {
                        'X-RapidAPI-Key': this.$rapidapi.key,
                        'X-RapidAPI-Host': this.$rapidapi.avatars_host,
                    },
                }
            )
            .then((res) => {
                commit('updateLoadingAvatar', false)
                if (res.data.error) {
                    commit('updateErrorAvatar', true)
                } else {
                    commit('updateErrorAvatar', false)
                    commit('updateGeneratedAvatar', res.data)
                }
            })
            .catch(() => {
                commit('updateLoadingAvatar', false)
            })
    },
    A_SEARCH_SONG({ commit }, data) {
        // hago el fetching a la api para traer el artista
        commit('updateErrorSong', false) // inicializo el estado de error en false
        commit('updateLoadingSong', true) // inicializo el estado de loading en true mientras se realiza el fetching a la API
        this.$axios
            .get('https://spotify-web2.p.rapidapi.com/search/?q=' + data, {
                headers: {
                    'X-RapidAPI-Key': this.$rapidapi.key,
                    'X-RapidAPI-Host': this.$rapidapi.songs_host,
                },
            })
            .then((res) => {
                commit('updateLoadingSong', false)
                if (res.data.error) {
                    commit('updateErrorSong', true)
                } else {
                    commit('updateErrorSong', false)
                    commit('updateTrackId', res.data.tracks.id)
                    if (res.data.tracks) {
                        commit('updateSearchedSong', res.data.tracks)
                    } else {
                        commit('updateSearchedSong', null)
                    }
                }
            })
            .catch(() => {
                commit('updateLoadingSong', false)
            })
    },
    A_GET_TRACK_CREDITS({ commit }, id) {
        // hago el fetching a la api para traer los créditos de una canción en particular
        commit('updateLoadingTrackCredits', true)
        this.$axios
            .get('https://spotify-web2.p.rapidapi.com/track_credits/?id=' + id, {
                headers: {
                    'X-RapidAPI-Key': this.$rapidapi.key,
                    'X-RapidAPI-Host': this.$rapidapi.track_id_host,
                },
            })
            .then((res) => {
                commit('updateLoadingTrackCredits', false)
                if (res.data.error) {
                    commit('updateErrorTrackCredits', true)
                } else {
                    commit('updateErrorTrackCredits', false)
                    commit('updateTrackCredits', res.data)
                }
            })
            .catch(() => {
                commit('updateLoadingTrackCredits', false)
            })
    },
}

export const mutations = {
    // cargo los diferentes estados
    updateLoadingBodies(state, data) {
        state.loading_bodies = data
    },
    updateLoadingTypes(state, data) {
        state.loading_types = data
    },
    updateLoadingAssets(state, data) {
        state.loading_assets = data
    },
    updateLoadingAvatar(state, data) {
        state.loading_avatar = data
    },
    updateBodies(state, data) {
        state.bodies = data
    },
    updateTypes(state, data) {
        state.types = data
    },
    updateAssets(state, data) {
        state.assets = data
    },
    updateGeneratedAvatar(state, data) {
        state.generated_avatar = data
    },
    updateErrorAvatar(state, data) {
        state.error_avatar = data
    },

    updateErrorSong(state, data) {
        state.error_song = data
    },
    updateLoadingSong(state, data) {
        state.loading_song = data
    },
    updateSearchedSong(state, data) {
        state.searched_song = data
    },
    updateTrackId(state, data) {
        state.track_id = data
    },
    updateTrackCredits(state, data) {
        state.track_credits = data
    },
    updateLoadingTrackCredits(state, data) {
        state.loading_Track_Credits = data
    },
    updateErrorTrackCredits(state, data) {
        state.error_Track_Credits = data
    },
}
