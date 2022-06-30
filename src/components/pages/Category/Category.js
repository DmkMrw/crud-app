import { useParams } from "react-router-dom";
import { getPostByCategory } from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dateToStr } from "../../../utils/dateToStr";


const Category = () => {

     const { categoryId } = useParams();
     const postCategory = useSelector((state) => getPostByCategory(state, categoryId))

     return (
          <>
               <h1>Category {categoryId}</h1>

               <Row>
                    {postCategory.map(post => (
                         <Col key={post.id} md={6} lg={4} xl={3} className='justify-content-md-start mb-5 mt-5'>
                              <Card style={{ minWidth: '15rem'}} className="rounded" key={post.id}>
                              <Card.Body >
                                        <Card.Title>{post.title}</Card.Title>
                                        <p><b>Author: </b>{post.author}</p>
                                        <p><b>Published: </b> {dateToStr(post.publishedDate)}</p>
                                        <p><b>Category: </b> {post.category}</p>
                                        <Card.Text><span>Short description: {post.shortDescription}</span></Card.Text>
                                        <Link key={post.id} to={'/post/' + post.id}><Button variant="primary">Read more</Button></Link>
                              </Card.Body>
                              </Card>
                         </Col>
                    ))}
               </Row>
          </>


     );
}

export default Category;