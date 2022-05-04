import axios from "axios";
import React from "react";
const baseUrl = "http://localhost:1337/blogs";
export async function getServerSideProps({ params }) {
  const { id } = params;
  console.log(id);
  try {
    const { data } = await axios.get(`${baseUrl}/${id}`);
    return {
      props: {
        blog: data,
				message:""
      },
    };
  } catch (err) {
    return {
      props: {
        blog:{},
				message: err.message,
      },
    };
  }
}

const BlogDetail = ({blog,message}) => {
  return <div>{JSON.stringify(blog)}</div>;
};

export default BlogDetail;
