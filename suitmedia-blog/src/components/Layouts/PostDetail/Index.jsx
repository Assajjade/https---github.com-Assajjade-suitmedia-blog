import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`https://suitmedia-backend.suitdev.com/api/ideas?filter[slug]=${slug}&append[]=small_image&append[]=medium_image`);
      if (response.data.data.length > 0) {
        setPost(response.data.data[0]);
      }
      console.log(response.data.data[0]);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail mx-32">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.medium_image && (
        <img src={post.medium_image[0].url} alt={post.title} className="w-full h-auto mb-4" />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostDetail;
