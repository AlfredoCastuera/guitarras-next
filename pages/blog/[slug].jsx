import axios from "axios";
import React from "react";
import DetalleBlog from "../../components/DetalleBlog";

export async function getServerSideProps({ params }) {
  const { slug } = params;
  try {
    const { data } = await axios.get(`${process.env.API_URL}/blogs?slug=${slug}`);
    return {
      props: {
        blog: data[0],
				message:""
      },
    };
  } 
  catch (err) {
    return {
      notFound:true
    }
  };
}

const BlogDetail = ({blog}) => {
  return <DetalleBlog blog={blog} />
};

export default BlogDetail;
