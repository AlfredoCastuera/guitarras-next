import React, { useContext } from "react";
import Layout from "../components/Layout";
import axios from "axios"
import Guitarra from "../components/Guitarra";
import tiendaContext from "../contexts/tiendaContext";
import styles from "../styles/Tienda.module.css"
export async function getServerSideProps({context}){
  try{
    const {data} = await axios.get(`${process.env.API_URL}/guitarras`)
    return {
      props:{
        guitarras:data
      }
    }
  }
  catch(err){
    return {
      notFound:true
    }
  }
}

const Tienda = ({guitarras}) => {
  const { tienda } = useContext(tiendaContext)
  console.log(tienda)
  console.log(guitarras)
  return (
    <div>
      <Layout title="tienda virtual">
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {
              guitarras.length && (
                guitarras.map(guitarra=>(<Guitarra key={guitarra.id} guitarra={guitarra} />))
              )
            }
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Tienda;
