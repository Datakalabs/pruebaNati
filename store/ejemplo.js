export const strict = false

export const state = () => ({
    loading_bodies: true,
    loading_types: true,
    loading_assets: true,
    bodies: null,
    types: null,
    assets: null,
    generated_avatars: [],
})

export const actions = {
    A_GET_BODIES({ commit }) {
        // eslint-disable-next-line no-console
        console.log('err')
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
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.log(err)
                commit('updateLoadingBodies', false)
            })
    },
    A_GET_TYPES({ commit }, type) {
        // eslint-disable-next-line no-console
        console.log('err')
        commit('updateLoadingBodies', true)
        this.$axios
            .get('https://doppelme-avatars.p.rapidapi.com/assets/' + type, {
                headers: {
                    'X-RapidAPI-Key': this.$rapidapi.key,
                    'X-RapidAPI-Host': this.$rapidapi.avatars_host,
                },
            })
            .then((res) => {
                commit('updateLoadingBodies', false)
                commit('updateTypes', res.data.asset_style)
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.log(err)
                commit('updateLoadingBodies', false)
            })
    },
}

export const mutations = {
    updateLoadingBodies(state, data) {
        state.loading_bodies = data
    },
    updateLoadingTypes(state, data) {
        state.loading_types = data
    },
    updateLoadingAssets(state, data) {
        state.loading_assets = data
    },
    updateBodies(state, data) {
        state.bodies = data
    },
    updateTypes(state, data) {
        state.types = data
    },
}
