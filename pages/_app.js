import '@/styles/globals.css'
import { English } from '@/utils/translations/en'
import { Afrikaan } from '@/utils/translations/afrikaan'
import { Arabic } from '@/utils/translations/arabic'
import { Spanish } from '@/utils/translations/esp'
import { French } from '@/utils/translations/fr'
import { Lingalla } from '@/utils/translations/lingala'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import Layout from '@/layout/layout'

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: English
    },
    es: {
      global: Spanish
    },
    af: {
      global: Afrikaan
    },
    ar: {
      global: Arabic
    },
    fr: {
      global: French
    },
    li: {
      global: Lingalla
    },
  }
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <I18nextProvider i18n={i18next}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </>
  )
}
