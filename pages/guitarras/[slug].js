import React,{ useState ,useContext } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import axios from "axios";
import tiendaContext from "../../contexts/tiendaContext";
import styles from "../../styles/Guitarra.module.css";
import { truncateText } from "../../helpers/truncateText";

export async function getServerSideProps({ params: { slug } }) {
  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/guitarras?slug=${slug}`
    );
    return {
      props: {
        guitarra: data[0],
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

const DetalleGuitarra = ({ guitarra }) => {
  const {agregarProducto} = useContext(tiendaContext)
  console.log(guitarra);
  const {
    nombre,
    descripcion,
    imagen: { url },
    precio,
    id
  } = guitarra;
  const [cantidad,setCantidad] = useState(0)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log({cantidad:Number(cantidad),id,nombre,precio})
    agregarProducto({cantidad:Number(cantidad),id,nombre,precio})
  }
  return (
    <Layout title={nombre}>
      <div className={`contenedor ${styles.guitarra}`}>
        <div className={styles.imagen}>
          <Image
            layout="responsive"
            width={180}
            height={350}
            src={url}
            alt={`Imagen guitarra ${nombre}`}
          />
        </div>
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.parrafos}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label>Cantidad:</label>
            <select value={cantidad} onChange={(e)=>setCantidad(e.target.value)}>
              <option value="0">-- Seleccione una opcion --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input 
              type='submit' 
              value='Agregar al carrito'
              disabled={cantidad==="0"}
              />

          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DetalleGuitarra;
