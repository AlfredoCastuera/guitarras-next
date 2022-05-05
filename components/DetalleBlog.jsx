import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from './Layout'
import styles from '../styles/Blog.module.css'
import { formatDate } from '../helpers/formatDate'

const DetalleBlog = ({blog}) => {

	const {titulo,contenido,imagen,published_at,id} = blog
  return (
    <Layout
			title={titulo}
		>
			<main className='contenedor'>
				<h1 className='heading'>{titulo}</h1>
				<article className={styles.detalle}>
					<Image 
						layou='responsive' width={800} height={600}
						src={imagen?.url ?? "https://res.cloudinary.com/dinaasx2i/image/upload/v1651620636/blog_3_ec41ccd6b9.jpg"} alt={`imagen blog ${titulo}`}
					/>
					<div className={styles.contenido}>
						<p className={styles.fecha}>{formatDate(published_at)}</p>
						<p className={styles.parrafos}>{contenido}</p>
					</div>
				</article>
			</main>
		</Layout>
  )
}

export default DetalleBlog