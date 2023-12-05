<template>
    <div>
        <span class="text-h6 warning--text"><v-icon color="warning" class="mr-2">mdi-eye</v-icon>Mínimos a cumplir</span>
        <v-list>
            <v-list-item> Utilizar VSCode como editor de código </v-list-item>
            <v-list-item> Utilizar Vuetify 2 como librería estética </v-list-item>
            <v-list-item> La llamada a la api se deberá realizar en el store </v-list-item>
            <v-list-item> Solo se debrá hacer la llamada a la api si no se dipone de los datos guardados </v-list-item>
            <v-list-item> Deberá hacerse uso de loadings mientras se hace la llamada a la api </v-list-item>
            <v-list-item> Crear y utilizar un plugin como mínimo ya sea para formateo de variables u otra finalidad </v-list-item>
            <v-list-item> Tener un mínimo control de errores </v-list-item>
            <v-list-item> Hacer un uso adecuado del grid </v-list-item>
            <v-list-item> La librería de iconos es Material: <a class="ml-2" href="https://pictogrammers.github.io/@mdi/font/1.1.34/" target="_blank">Ver</a> </v-list-item>
            <v-list-item> Comentar el código </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    name: 'EjemploComp',
}
</script>

<style lang="scss" scoped></style>
