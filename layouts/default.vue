<template>
    <v-app dark>
        <v-app-bar fixed app>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-divider vertical class="mx-3"></v-divider>
            <v-btn
                text
                @click="
                    $router.currentRoute.path !== '/' ? $router.push('/') : ''
                "
                >Inicio</v-btn
            >
            <v-btn
                text
                @click="
                    $router.currentRoute.path !== '/ejemplo'
                        ? $router.push('/ejemplo')
                        : ''
                "
                >Ejemplo</v-btn
            >
            <v-btn
                text
                @click="
                    $router.currentRoute.path !== '/pruebauno'
                        ? $router.push('/pruebauno')
                        : ''
                "
                >Prueba 1</v-btn
            >
            <v-btn
                text
                @click="
                    $router.currentRoute.path !== '/pruebados'
                        ? $router.push('/pruebados')
                        : ''
                "
                >Prueba 2</v-btn
            >
        </v-app-bar>
        <v-main>
            <v-container style="max-width: 100%">
                <Nuxt style="width: 100%" />
            </v-container>
        </v-main>
        <v-footer app>
            <span>Data-ka &copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            title: 'Prueba Técnica Data-ka',
        }
    },
}
</script>
