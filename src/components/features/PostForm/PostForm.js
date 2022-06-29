import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import dateFormat from "dateformat";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";



const PostForm = ({ action, actionText, ...props }) => {

     const [title, setTitle] = useState(props.title || '');
     const [author, setAuthor] = useState(props.author || '');
     const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
     const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
     const [content, setContent] = useState(props.content || '');
     const [contentError, setContentError] = useState(false);
     const [dateError, setDateError] = useState(false);

     const { register, handleSubmit: validate, formState: { errors } } = useForm();

     const handleSubmit = e => {
          setContentError(!content);
          setDateError(!publishedDate);
          if(content && publishedDate) {
          action({ title, author, publishedDate, shortDescription, content });
          };
     };

     return (
          <>
               <Row className='justify-content-md-center'>
                    <Col md={6}>
                         <Form onSubmit={validate(handleSubmit)}>
                              <Col md={6}>
                                   <Form.Group className="mb-3" controlId="title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                             {...register("title", { required: true, minLength: 3})}
                                             type="text"
                                             placeholder="Enter title"
                                             onChange={(e) => setTitle(e.target.value)} value={title}
                                        />
                                        {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and should be minimum 3 signs lenght</small>}
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="author">
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control
                                             {...register("author", { required: true, minLength: 3})}
                                             type="text"
                                             placeholder="Enter author"
                                             onChange={(e) => setAuthor(e.target.value)} value={author}
                                        />
                                        {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and should be minimum 3 signs lenght</small>}
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
                                        {dateError && <small className="d-block form-text text-danger mt-2">You have to choose a date.</small>}
                                   </Form.Group>
                              </Col>

                              <Form.Group className="mb-3" controlId="description">
                                   <Form.Label>Short Description</Form.Label>
                                   <Form.Control
                                        {...register("description", { required: true, minLength: 20})}
                                        type="text"
                                        as="textarea"
                                        rows={3}
                                        placeholder="Leave a comment here"
                                        onChange={(e) => setShortDescription(e.target.value)} value={shortDescription}
                                   />
                                   {errors.shortDescription && <small className='d-block form-text text-danger mt-2'>This field is required and should be minimum 20 signs length</small>}
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="content">
                                   <Form.Label>Main Content</Form.Label>
                                   <ReactQuill theme='snow' value={content} onChange={setContent} placeholder='Type here' />
                                   {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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