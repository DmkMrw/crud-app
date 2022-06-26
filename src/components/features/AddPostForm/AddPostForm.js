import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postRedux';
import { useNavigate } from 'react-router-dom';



const AddPostForm = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();

     const [title, setTitle] = useState('');
     const [author, setAuthor] = useState('');
     const [publishedDate, setPublishedDate] = useState('');
     const [shortDescription, setshortDescription] = useState('');
     const [content, setContent] = useState('');

     const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
          navigate('/')
     };

     return (
          <>
               <Row className='justify-content-md-center'>
                    <Col md={6}>
                         <Form onSubmit={handleSubmit}>
                              <Col md={6}>
                                   <Form.Group className="mb-3" controlId="title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Enter title" required onChange={(e) => setTitle(e.target.value)} />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="author">
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control type="text" placeholder="Enter author" required onChange={(e)=> setAuthor(e.target.value)} />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="published">
                                        <Form.Label>Published</Form.Label>
                                        <Form.Control type="date" placeholder="Enter date" required onChange={(e)=> setPublishedDate(e.target.value)}/>
                                   </Form.Group>
                              </Col>

                              <Form.Group className="mb-3" controlId="description">
                                   <Form.Label>Short Description</Form.Label>
                                   <Form.Control type="text" as="textarea" rows={3} placeholder="Leave a comment here" required onChange={(e) => setshortDescription(e.target.value)} />
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="content">
                                   <Form.Label>Main Content</Form.Label>
                                   <Form.Control type="text" as="textarea" rows={7} placeholder="Leave a comment here" required onChange={(e)=> setContent(e.target.value)}/>
                              </Form.Group>

                              <Button variant="primary" type="submit">
                              Submit
                              </Button>
                         </Form>
                    </Col>
               </Row>
          </>
     );
}

export default AddPostForm;