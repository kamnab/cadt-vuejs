import { createI18n } from 'vue-i18n'
import translation_en from './en'
import translation_km from './km'

const i18n = createI18n({
    locale: 'km',
    fallbackLocale: 'km',
    messages: {
        en: translation_en,
        km: translation_km
    },
    // nvabar: {
    //     en: translation_en,
    //     km: translation_km
    // },

})

export default i18n