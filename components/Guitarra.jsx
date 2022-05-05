import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import ReactCardFlip from "react-card-flip";
import styles from "../styles/Guitarra.module.css";
import { truncateText } from "../helpers/truncateText";

const Guitarra = ({ guitarra }) => {
  const {
    descripcion,
    imagen: { url },
    nombre,
    precio,
    slug,
  } = guitarra;
	const [flip,setFlip] = useState(false)
  return (
    <ReactCardFlip isFlipped={flip}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={url}
          alt={`Imagen guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p>{truncateText(descripcion, 110)}</p>
          <p className={styles.precio}>${precio}</p>
          <Link href={`/guitarras/${slug}`}>Ver guitarra</Link>
					<button className={styles.flip_button} onClick={()=>setFlip(true)}>Más informacion</button>
        </div>
      </div>

			<div className={styles.back}>
				<p>{truncateText(descripcion, 300)}</p>
				<button className={styles.flip_button} onClick={()=>setFlip(false)}>Volver</button>
			</div>
    </ReactCardFlip>
  );
};

export default Guitarra;
