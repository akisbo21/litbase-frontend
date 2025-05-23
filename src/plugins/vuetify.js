// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        defaults: {
            VCard: {
                elevation: 2,
            },
        },
    })
    app.vueApp.use(vuetify)
})