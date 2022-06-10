import Posts from '../../features/Posts/Posts'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
     return (
          <>
          <div className="d-flex justify-content-between">
               <h1>All posts</h1>
               <Link to="/post/add"><Button variant="outline-info">Add post</Button>{' '}</Link>
          </div>
          <Posts/>
          </>
     );
}

export default Home;