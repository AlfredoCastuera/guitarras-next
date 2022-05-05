import React from "react";
import axios from 'axios'
import Layout from "../../components/Layout";
import Entrada from "../../components/Entrada";
import styles from '../../styles/Blog.module.css'

export async function getServerSideProps(context){
  try{
    const {data} = await axios.get(`${process.env.API_URL}/blogs`)
    return { props: { blogs:data } }
  }catch(err){
    console.log(err)
    return { props: { blogs:err.message } }
  }
}

const Blogs = ({blogs}) => {
  console.log(blogs)
  return (
    <div>
      <Layout title="blogs">
       <main className={`contenedor `}>
         <h2 className="heading">Blog</h2>
         <div className={styles.grid}>
          {
            blogs.map(blog=>(
              <Entrada key={blog.id} blog={blog}/>
            ))
          }
         </div>
       </main>
      </Layout>
    </div>
  );
};

export default Blogs;

