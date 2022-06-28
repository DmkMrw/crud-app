import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import dateFormat from "dateformat";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';



const PostForm = ({ action, actionText, ...props }) => {

     const [title, setTitle] = useState(props.title || '');
     const [author, setAuthor] = useState(props.author || '');
     const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
     const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
     const [content, setContent] = useState(props.content || '');

     const handleSubmit = e => {
          e.preventDefault();
          action({ title, author, publishedDate, shortDescription, content });
     };

     return (
          <>
               <Row className='justify-content-md-center'>
                    <Col md={6}>
                         <Form onSubmit={handleSubmit}>
                              <Col md={6}>
                                   <Form.Group className="mb-3" controlId="title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                             type="text"
                                             placeholder="Enter title"
                                             required
                                             onChange={(e) => setTitle(e.target.value)} value={title}
                                        />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="author">
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control
                                             type="text"
                                             placeholder="Enter author"
                                             required
                                             onChange={(e) => setAuthor(e.target.value)} value={author}
                                        />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="published">
                                        <Form.Label>Published</Form.Label>
                                        {/* <Form.Control
                                             type="date"
                                             placeholder="Enter date"
                                             required
                                             onChange={(e) => setPublishedDate(dateFormat(e.target.value, "yyyy-mm-dd"))} value={publishedDate}
                                        /> */}
                                        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} placeholderText={'Please select a date'} />
                                   </Form.Group>
                              </Col>

                              <Form.Group className="mb-3" controlId="description">
                                   <Form.Label>Short Description</Form.Label>
                                   <Form.Control
                                        type="text"
                                        as="textarea"
                                        rows={3}
                                        placeholder="Leave a comment here"
                                        required
                                        onChange={(e) => setShortDescription(e.target.value)} value={shortDescription}
                                   />
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="content">
                                   <Form.Label>Main Content</Form.Label>
                                   <ReactQuill theme='snow' value={content} onChange={setContent} placeholder='Type here' />
                              </Form.Group>

                              <Button variant="primary" type="submit">
                              {actionText}
                              </Button>
                         </Form>
                    </Col>
               </Row>
          </>
     );
}

export default PostForm;