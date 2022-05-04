import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <div >
      <Layout
        title="inicio"
      >
        <h1>desde el index</h1>
      </Layout>
    </div>
  )
}
