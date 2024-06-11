const BlogCard = ({ post }) => {
    const { title, slug, small_image } = post;
    const imageUrl = small_image?.[0]?.url || '';
  
    return (
      <div className="blog-card border rounded-md overflow-hidden shadow-md mb-4">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" loading="lazy" />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <a href={`/post/${slug}`} className="text-blue-500">Read more</a>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  