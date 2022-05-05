import React,{ useState, useEffect } from 'react'
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Layout from "../components/Layout";
import Guitarra from "../components/Guitarra";
import Curso from "../components/Curso";
import Entrada from "../components/Entrada";
import Slider from "react-slick";
import Pagination from "../components/Pagination";
import styles from "../styles/Home.module.css";

export async function getServerSideProps({ context }) {
  try {
    const totalGuitarras = axios.get(`${process.env.API_URL}/guitarras/count`);
    const guitarras = axios.get(`${process.env.API_URL}/guitarras?_start=0&_limit=6`);
    const cursos = axios.get(`${process.env.API_URL}/cursos`);
    const blogs = axios.get(`${process.env.API_URL}/blogs`);
    const respuestas = await Promise.all([guitarras, cursos, blogs,totalGuitarras]);
    return {
      props: {
        guitarras: respuestas[0].data,
        curso: respuestas[1].data,
        blogs: respuestas[2].data,
        totalGuitarras:respuestas[3].data
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

export default function Home({ guitarras, curso, blogs,totalGuitarras }) {
  const [page,setPage] = useState(1)
  const [currentGuitarras,setCurrentGuitarras] = useState(guitarras)
  useEffect(()=>{
    const getNextGuitars = async () =>{
      const skip = page===1? 0 : (page*6)-6
      console.log('skip',skip)
      try{
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/guitarras?_start=${skip}&_limit=6`)
        setCurrentGuitarras(data)
      }
      catch(err){
        setCurrentGuitarras([...currentGuitarras])
      }
    }
    getNextGuitars()
    // console.log(process.env.NEXT_PUBLIC_API_URL)
  },[page])
  const numberOfPages = Math.floor(totalGuitarras/6)
  /*configuracion del slider de blogs*/
  console.log(curso);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Layout title="inicio" guitarras={guitarras}>
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>
        <div className={styles.grid}>
          {currentGuitarras.length &&
            currentGuitarras.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra} />
            ))}
        </div>
        <Pagination size={numberOfPages} page={page} setPage={setPage}/>
      </main>
      <Curso curso={curso} />
      <aside>
        <main className={`contenedor `}>
          <h2 className="heading">Blog</h2>
          <Slider {...settings}>
            {blogs.map((blog) => (
              <Entrada key={blog.id} blog={blog} />
            ))}
          </Slider>
        </main>
      </aside>
    </Layout>
  );
}
