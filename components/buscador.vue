<template>
  <div>
    <header class="text-h6 success--text">Buscar canciones/artistas</header>
    <v-form ref="form" v-model="valid">
      <v-text-field v-model="query" :rules="queryRules" prepend-inner-icon="mdi-magnify" clearable outlined rounded class="success--text" placeholder="escribe una canción, un artista o un album"></v-text-field>
      <v-btn rounded class="success" type="button" @click="getResults()">Buscar</v-btn>
      <span v-if="errorSearch">
        <v-alert text type="error">Ha ocurrido un error en la búsqueda</v-alert>
      </span>
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BuscadorComp',
  data() {
    return {
      valid: false,
      query: null,
      type: null,
      queryRules: [(v) => !!v || 'Debes escribir al menos una palabra para buscar'],
    }
  },
  computed: {
    ...mapState({
      //   query: (state) => state.spotify.search_query,
      //   type: (state) => state.spotify.search_type,
      results: (state) => state.spotify.search_results,
      loadingResults: (state) => state.spotify.loading_results,
      errorSearch: (state) => state.spotify.error_search,
    }),
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    getResults() {
      this.$store.dispatch('spotify/GET_RESULTS', { q: this.query, type: this.type })
    },
  },
}
</script>

<style lang="scss" scoped></style>
