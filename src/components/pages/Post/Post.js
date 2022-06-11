import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/store";
import { useState } from "react";
import RemoveModal from "../../features/RemoveModal/RemoveModal";


const Post = (props) => {

     const { id } = useParams();
     const listData = useSelector(state => getPostById(state, id))
     const [showRemoveModal, setShowRemoveModal] = useState(false)
     const handleClose = () => setShowRemoveModal(false);

     if (showRemoveModal) return <RemoveModal show={showRemoveModal} handleClose={handleClose}/>

     const handleShowRemoveModal = () => setShowRemoveModal(true)

     return (
          <>
               <Row className='justify-content-center'>
                    <Col md={8} className='d-flex justify-content-between'>
                         <h1>{listData.title}</h1>
                         <div>
                              <Button variant='outline-info' className='m-2'>Edit</Button>
                              <Button variant='outline-danger' onClick={handleShowRemoveModal}>Delete</Button>
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