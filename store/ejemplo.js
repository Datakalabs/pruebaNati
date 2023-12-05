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
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.log(err)
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
}
