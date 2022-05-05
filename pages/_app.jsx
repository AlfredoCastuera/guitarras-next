import '../styles/normalize.css'
import '../styles/globals.css'
import {TiendaContextProvider} from '../contexts/tiendaContext'


function MyApp({ Component, pageProps }) {
  return (
    <TiendaContextProvider>
      <Component {...pageProps} />
    </TiendaContextProvider>
  )
}

export default MyApp
