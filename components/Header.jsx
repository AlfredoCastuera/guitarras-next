import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import { truncateText } from "../helpers/truncateText";
const Header = ({ guitarras }) => {
  const { pathname } = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image
                width={400}
                height={100}
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image
                  layout="fixed"
                  width={30}
                  height={25}
                  src="/img/carrito.png"
                  alt="Imagen carrito"
                />
              </a>
            </Link>
          </nav>
        </div>
        {!!guitarras && (
          <div className={styles.grid}>
            <div>
              <h1 className={styles.titulo}>Modelo {guitarras[0].nombre}</h1>
              <p className={styles.descripcion}>
                {truncateText(guitarras[0].descripcion, 400)}
              </p>
              <p className={styles.precio}>${guitarras[0].precio}</p>
              <Link href={`/guitarras/${guitarras[0].slug}`}>Ver guitarra</Link>
            </div>
          </div>
        )}
      </div>
      {pathname === "/" && (
        <img
          className={styles.guitarra}
          src="/img/header_guitarra.png"
          alt=""
        />
      )}
    </header>
  );
};

export default Header;
