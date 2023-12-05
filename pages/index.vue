<template>
    <v-row justify="center" align="center">
        <v-col v-if="$vuetify.breakpoint.name !== 'xs'" :xl="2" :lg="2" :md="1" :sm="1"></v-col>
        <v-col :xl="8" :lg="8" :md="10" :sm="10" :xs="10">
            <v-card class="pa-5">
                <v-card-title>
                    <v-icon class="mr-2">mdi-information</v-icon>
                    <div class="text-h5 warning--text">Descripción</div>
                </v-card-title>

                <v-card-text>
                    <div>
                        La prueba consiste en dos aparatados con diferentes finalidades. En una se pedirá que con unos datos que se recuperarán desde https://rapidapi.com/, pintar diferentes elementos de la librería Vuetify (2.0) a libre elección y mediante eventos modificar dichos datos. En la segunda parte se pedirá renderizar lo mas parecido posible a una imagen dada los componentes necesarios.
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <div>
                        <Ejemplo></Ejemplo>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.name !== 'xs'" :xl="2" :lg="2" :md="1" :sm="1"></v-col>
    </v-row>
</template>

<script>
export default {
    name: 'IndexPage',
}
</script>
