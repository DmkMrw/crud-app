import { Card, Button, } from "react-bootstrap";
import { Link } from "react-router-dom";


const Post = (props) => {

     return (
          <>
          <Card style={{ width: '18rem' }} className="mb-4 flex-grow-1">
               <Card.Body>
                         <Card.Title>{props.title}</Card.Title>
                         <p><b>Author: </b>{props.author}</p>
                         <p><b>Published: </b> {props.publishedDate}</p>
                         <Card.Text className="font-weight-bold"><span>Short description: {props.shortDescription}</span></Card.Text>
                         <Link key={props.postId} to={'/post/' + props.postId}><Button variant="primary">Read more</Button></Link>
               </Card.Body>
          </Card>
          </>
     );
}

export default Post;