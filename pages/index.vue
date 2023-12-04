<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card class="pa-5">
                <v-card-title>
                    <div class="text-h5 warning--text">Descripción</div>
                </v-card-title>

                <v-card-text>
                    <div>
                        La prueba consiste en dos aparatados con diferentes
                        finalidades. En una se pedirá que con unos datos que se
                        recuperarán desde https://rapidapi.com/, pintar
                        diferentes elementos de la librería Vuetify (2.0) a
                        libre elección y mediante eventos modificar dichos
                        datos. En la segunda parte se pedirá que con los mismos
                        datos, renderizar lo mas parecido posible a una imagen
                        dada los componentes necesarios
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <div>
                        <span class="text-h6 warning--text"
                            >Mínimos a cumplir</span
                        >
                        <v-list>
                            <v-list-item>
                                Utilizar VSCode como editor de código
                            </v-list-item>
                            <v-list-item>
                                La llamada a la api se deberá realizar en el
                                store
                            </v-list-item>
                            <v-list-item>
                                Solo se debrá hacer la llamada a la api si no se
                                dipone de los datos guardados
                            </v-list-item>
                            <v-list-item>
                                Deberá hacerse uso de loadings mientras se hace
                                la llamada a la api
                            </v-list-item>
                            <v-list-item>
                                Se deberá crear y utilizar un plugin como mínimo
                                ya sea para formateo de variables u otra
                                finalidad
                            </v-list-item>
                        </v-list>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'IndexPage',
}
</script>
