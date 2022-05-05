import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Guitarra.module.css"
import { truncateText } from '../helpers/truncateText'

const Guitarra = ({guitarra}) => {
    const {descripcion,imagen:{url},nombre,precio,slug} = guitarra
  return (
    <div className={styles.guitarra}>
			<Image layout="responsive" width={180} height={350}
				src={url} alt={`Imagen guitarra ${nombre}`}
			/>
			<div className={styles.contenido}>
				<h3>{nombre}</h3>
				<p>{truncateText(descripcion,110)}</p>
				<p className={styles.precio}>${precio}</p>
				<Link href={`/guitarras/${slug}`}>Ver guitarra</Link>
			</div>
    </div>
  )
}

export default Guitarra