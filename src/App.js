import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import About from "./components/pages/About/About";
import BlankPage from "./components/pages/BlankPage/BlankPage";
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Categories from './components/pages/Categories/Categories';
import { Container } from 'react-bootstrap';
import AddPostForm from './components/features/AddPostForm/AddPostForm';
import EditPostForm from './components/features/EditPostForm/EditPostForm';
import Category from './components/pages/Category/Category';


const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPostForm />} />
          <Route path="/post/edit/:postId" element={<EditPostForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="*" element={<BlankPage />} />
        </Routes>
        <Footer />
      </Container>

    </>
  );
}

export default App;