import { createI18n } from 'vue-i18n'

const localeFiles = import.meta.glob('./locales/*.json', { eager: true })
const messages = {}
const locales = []

Object.keys(localeFiles).forEach(key => {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i)
  if (matched && matched.length > 1) {
    const locale = matched[1]

    locales.push(locale)
    messages[locale] = localeFiles[key].default
  }
})

const getDefaultLocale = () => {
  const [, routeLocale] = document.location.pathname.match(new RegExp(`^\\/(${locales.join('|')})`, 'i')) || []

  if (routeLocale) return routeLocale
  else return import.meta.env.VITE_APP_I18N_LOCALE || 'en'
}

export default createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
})
