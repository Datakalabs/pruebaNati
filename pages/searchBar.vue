<template>
    <div>
      <input id="input-search" type="text" class="form-control" v-model="q" placeholder='Buscar'>
      <div id="search-bar" v-if="search && search.length">
      </div>
      <button @click="search">Buscar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        q: ''
      };
    },
    methods: {
      handleInput() {
        // lógica adicional 
      },
      search() {
        // emite una acción del store con la consulta de búsqueda
        this.$store.dispatch('A_GET_SEARCH', this.q);
      }
    }
  };
  </script>