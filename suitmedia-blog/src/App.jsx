import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from "./components/Layouts/Banner/Index"
import Header from "./components/Layouts/Header"
import ListPost from "./components/Layouts/ListPosts/Index"
import PostDetail from './components/Layouts/PostDetail/Index';
function App() {


  return (
    <div className='App'>
      <Header />
      <Banner alt="Banner"/>
      <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ListPost />} />
            <Route path="/post/:slug" element={<PostDetail />} />
          </Routes>
        </main>
    </div>
  )
}

export default App
