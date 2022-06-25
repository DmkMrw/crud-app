import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';



const AddPostForm = () => {

     const [title, setTitle] = useState('');
     const [author, setAuthor] = useState('');
     const [publishedDate, setPublishedDate] = useState('');
     const [description, setDescription] = useState('');
     const [content, setContent] = useState('');



     return (
          <>
               <h1>add post form</h1>
               <Row className='justify-content-md-center'>
                    <Col md={6}>
                         <Form>
                              <Col md={6}>
                                   <Form.Group className="mb-3" controlId="title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Enter title"  />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="author">
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control type="text" placeholder="Enter author"  />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="published">
                                        <Form.Label>Published</Form.Label>
                                        <Form.Control type="date" placeholder="Enter date" />
                                   </Form.Group>
                              </Col>

                              <Form.Group className="mb-3" controlId="description">
                                   <Form.Label>Short Description</Form.Label>
                                   <Form.Control type="text" as="textarea" rows={3} placeholder="Leave a comment here" />
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="content">
                                   <Form.Label>Main Content</Form.Label>
                                   <Form.Control type="text" as="textarea" rows={7} placeholder="Leave a comment here" />
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