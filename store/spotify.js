export const strict = false

export const state = () => ({
  loading_results: false,
  search_results: null,
  error_search: null,
  search_query: null,
  search_type: 'tracks',
})

export const actions = {
  GET_RESULTS({ commit }, params = { q: state.search_query, type: state.search_type }) {
    commit('updateErrorSearch', false)
    commit('updateLoadingResults', true)
    this.$axios
      .get('https://spotify-web2.p.rapidapi.com/search/' + params, {
        headers: {
          'X-RapidAPI-Key': this.$rapidapi.key,
          'X-RapidAPI-Host': this.$rapidapi.spotify_host,
        },
      })
      .then((res) => {
        commit('updateLoadingResults', false)
        if (res.data.error) {
          commit('updateErrorSearch', true)
        } else {
          commit('updateErrorSearch', false)
          commit('getResults', res.data.items)
        }
      })
      .catch(() => {
        commit('updateLoadingResults', false)
      })
  },
}

export const mutations = {
  updateErrorSearch(state, data) {
    state.error_search = data
  },
  getResults(state, data) {
    state.search_results = data
  },
  updateLoadingResults(state, data) {
    state.loading_results = data
  },
  updateSearchQuery(state, data) {
    state.search_query = data
  },
  updateSearchType(state, data) {
    state.search_type = data
  },
}
