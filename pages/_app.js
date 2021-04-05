
import '../styles/styles.scss'
import firebase , {FirebaseContext} from '../firebase'
import useAuth from '../hooks/useAuth'

const MyApp = ({ Component, pageProps }) =>{

 const usuario = useAuth()
 console.log(usuario)

  return (
    <FirebaseContext.Provider
    value={{
      firebase,
      usuario
    }}>
    <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
