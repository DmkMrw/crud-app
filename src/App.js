import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import PostAdd from "./components/pages/PostAdd/PostAdd";
import PostEdit from "./components/pages/PostEdit/PostEdit";
import About from "./components/pages/About/About";
import BlankPage from "./components/pages/BlankPage/BlankPage";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<BlankPage />} />
      </Routes>
    </>
  );
}

export default App;