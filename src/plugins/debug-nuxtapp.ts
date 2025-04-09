export default defineNuxtPlugin((nuxtApp) => {
    try {
        console.log('[DEBUG] NuxtApp loaded at plugin init:', Object.keys(nuxtApp))
    } catch (err) {
        console.error('[DEBUG] NuxtApp not available', err)
    }
})