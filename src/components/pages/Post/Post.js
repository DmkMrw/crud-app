import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/store";


const Post = (props) => {

     const { id } = useParams();
     const listData = useSelector(state => getPostById(state, id))

     return (
          <>
               <Row className='justify-content-center'>
                    <Col md={8} className='d-flex justify-content-between'>
                         <h1>{listData.title}</h1>
                         <div>
                              <Button variant='outline-info' className='m-2'>Edit</Button>
                              <Button variant='outline-danger'>Delete</Button>
                         </div>
                    </Col>
               </Row>

               <Row className='justify-content-center'>
                    <Col md={8}>
                         <p><b>Author: </b>{listData.author}{' '}</p>
                         <p><b>Published: </b> {listData.publishedDate}</p>
                         <p>{ listData.content }</p>
                    </Col>
               </Row>

          </>
     );
}

export default Post;