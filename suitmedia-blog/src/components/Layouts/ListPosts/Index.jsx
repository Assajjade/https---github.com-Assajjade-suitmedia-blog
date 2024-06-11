import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState('-published_at');

  useEffect(() => {
    fetchPosts();
  }, [page, pageSize, sort]);

  const fetchPosts = async () => {
    const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
      params: {
        'page[number]': page,
        'page[size]': pageSize,
        'append[]': ['small_image', 'medium_image'],
        sort,
      },
    });
    setPosts(response.data.data);
    // console.log(response.data.data);
  };

  const handleClick = () => {
    navigate(`/post/${slug}`);
  };

  const handleSortChange = (e) => setSort(e.target.value);
  const handlePageSizeChange = (e) => setPageSize(e.target.value);

  return (
    <div className="container mx-auto mt-8 px-28">
      <div className="flex justify-between mb-4">
        <div>
          Showing {((page - 1) * pageSize) + 1} - {page * pageSize} of {posts.length}
        </div>
        <div className="flex space-x-4">
          <select onChange={handlePageSizeChange} value={pageSize} className="border p-2">
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <select onChange={handleSortChange} value={sort} className="border p-2">
            <option value="-published_at">Newest</option>
            <option value="published_at">Oldest</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="card border p-4 bg-slate-300 rounded-lg" onClick={handleClick}>
            <img src={post.small_image?.[0]?.url || ''} alt={post.title} className="lazyload w-full h-48 object-cover rounded-xl" />
            <div className="p-4">
              <h2 className="text-lg font-bold line-clamp-3">{post.title}</h2>
              <a href={`/post/${post.slug}`} className="text-blue-500">Read more</a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="border p-2 mx-2">Previous</button>
        <button onClick={() => setPage(page + 1)} className="border p-2 mx-2">Next</button>
      </div>
    </div>
  );
};

export default ListPost;
