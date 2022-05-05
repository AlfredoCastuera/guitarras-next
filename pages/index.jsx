import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Layout from "../components/Layout";
import Guitarra from "../components/Guitarra";
import Curso from "../components/Curso";
import Entrada from "../components/Entrada";
import Slider from "react-slick";
import styles from "../styles/Home.module.css";

export async function getServerSideProps({ context }) {
  try {
    const guitarras = axios.get(`${process.env.API_URL}/guitarras`);
    const cursos = axios.get(`${process.env.API_URL}/cursos`);
    const blogs = axios.get(`${process.env.API_URL}/blogs`);
    const respuestas = await Promise.all([guitarras, cursos, blogs]);
    return {
      props: {
        guitarras: respuestas[0].data,
        curso: respuestas[1].data,
        blogs: respuestas[2].data,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

export default function Home({ guitarras, curso, blogs }) {
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
          {guitarras.length &&
            guitarras.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra} />
            ))}
        </div>
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
