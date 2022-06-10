import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/store";
import { Link } from "react-router-dom";
import { Card, Button, Row } from "react-bootstrap";


const Posts = () => {

     const posts = useSelector(getAllPosts)

     return (
          <>
               <Row className="d-flex justify-content-center col-xl-12">
                    {posts.map(post => (
                         <Card style={{ width: '18rem'}} className="mb-4 mt-4" key={post.id}>
                         <Card.Body>
                                   <Card.Title>{post.title}</Card.Title>
                                   <p><b>Author: </b>{post.author}</p>
                                   <p><b>Published: </b> {post.publishedDate}</p>
                                   <Card.Text className="font-weight-bold"><span>Short description: {post.shortDescription}</span></Card.Text>
                                   <Link key={post.id} to={'/post/' + post.id}><Button variant="primary">Read more</Button></Link>
                         </Card.Body>
                         </Card>
                    ))}
               </Row>
          </>
     );
}

export default Posts;