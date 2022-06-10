import { Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Post = (props) => {

     return (
          <>
          <Row className="d-flex justify-content-center">
               <Card style={{ width: '18rem' }} className="mb-4">
                    <Card.Body>
                              <Card.Title><h1>Article title</h1></Card.Title>
                              <p><b>Author: </b>{props.author}</p>
                              <p><b>Published: </b> {props.publishedDate}</p>
                              <Card.Text><span>Main content of the article</span></Card.Text>
                    </Card.Body>
               </Card>
          </Row>
          </>
     );
}

export default Post;