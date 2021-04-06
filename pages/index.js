
import React, { useEffect } from 'react'
import Layouts from '../components/layouts/Layouts'
import { FirebaseContext } from '../firebase'


const Home = () => {

  const [productos, setProductos] = useState([])
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase
      .db
      .collection('productos')
      .orderBy('creado' , 'desc')
      .onSnapshot(manejarSnapshot)
  }, [])

const manejarSnapshot = (snapshot) => {
    
  const productos = snapshot.docs.map(p=> {
    return {
      id:doc.id,
      ...doc.data()
    }
  })
  console.log(productos)
}


  return (

    <Layouts>
      <h1>Inicio</h1>
    </Layouts>
  )
}

export default Home
