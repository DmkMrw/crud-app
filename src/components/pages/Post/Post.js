import { Card, Button, } from "react-bootstrap";
import { Link } from "react-router-dom";


const Post = (props) => {

     return (
          <>
          <Card style={{ width: '18rem' }} className="mb-4">
               <Card.Body>
                         <Card.Title>{props.title}</Card.Title>
                         <p className="font-weight-bold">Author: {props.author}</p>
                         <p className="text-muted">Published: {props.publishedDate}</p>
                         <Card.Text className="font-weight-bold"><span>Short description: {props.shortDescription}</span></Card.Text>
                         <Link key={props.postId} to={'/post/' + props.postId}><Button variant="primary">Read more</Button></Link>
               </Card.Body>
          </Card>
          </>
     );
}

export default Post;