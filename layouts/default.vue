<template>
    <v-app dark>
        <v-app-bar :clipped-left="clipped" fixed app>
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
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
        <v-footer :absolute="!fixed" app>
            <span>Data-ka &copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/',
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Inspire',
                    to: '/inspire',
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Prueba Técnica Data-ka',
        }
    },
}
</script>
