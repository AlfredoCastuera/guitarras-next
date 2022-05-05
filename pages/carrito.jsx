import React, { useContext } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Carrito.module.css"
import { BsXLg } from "react-icons/bs";

import tiendaContext from "../contexts/tiendaContext";

const Carrito = () => {
  const { tienda ,quitarProducto,modificarProducto} = useContext(tiendaContext);
	const total = tienda.reduce((acum,item)=>{
		return acum+(item.cantidad * item.precio)
	},0)
  return (
    <Layout title="carrito">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={`contenedor ${styles.grid}`}>
					<div>
          {!tienda.length ? (
            <p>no tienes productos</p>
          ) : (
            tienda.map((producto) => (
              <div className={styles.contenido} key={producto.id}>
								<Image 
									layout="responsive"
									width={300}
									height={600}
									src={producto.url}
									alt={`imagen ${producto.nombre}`}
								/>
								<div style={{position:"relative",marginRight:"10rem"}}>
									<p className={styles.nombre}>{producto.nombre}</p>
									<p className={styles.cantidad}>Cantidad: </p>
									<select value={producto.cantidad} className={styles.select} onChange={(e)=>modificarProducto(producto.id,e.target.value)}>
										<option value="0">-- Seleccione una opcion --</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
            			</select>
									<p className={styles.precio}>${producto.precio}</p>
									<p className={styles.cantidad}>Subtotal:  ${producto.cantidad*producto.precio }</p>
									<BsXLg className={styles.close} onClick={()=>quitarProducto(producto.id)}/>
								</div>
              </div>
            ))
          )}
					</div>
					<div className={styles.pedido}>
						<h3>Resumen del pedido</h3>
						<p>Total: ${total}</p>
					</div>

        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
