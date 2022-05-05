import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Blog.module.css"
import { formatDate } from "../helpers/formatDate";
import { truncateText } from "../helpers/truncateText";
const Entrada = ({blog}) => {
	const {titulo,resumen,imagen:{url},published_at,id,slug} = blog
  return <article>
		<Image priority="true" layout="responsive" width={800} height={600} src={url} alt={`imagen blog ${titulo}`}/>
		<div className={styles.contenido}>
			<h2>{titulo}</h2>
			<p className={styles.fecha}>{formatDate(published_at)}</p>
			<p>{truncateText(resumen,100)}</p>
			<Link href={`/blog/${slug}`}>Leer entrada</Link>
		</div>
	</article>;
};

export default Entrada;
