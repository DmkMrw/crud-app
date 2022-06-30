import { getAllCategories } from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Nav, ListGroup, Row, Col } from 'react-bootstrap';
import shortid from "shortid";
import Category from "../Category/Category";


const Categories = () => {

     const categories = useSelector(getAllCategories);

     return (
          <>
               <Row className='justify-content-md-center'>
                    <Col md={6}>
                         <h1>All categories</h1>
                         <ListGroup className = 'mb-3 mt-3'>
                              {categories.map(category => <ListGroup.Item key={shortid()}><Nav.Link as={NavLink} to={"/category/" + category} >{category}</Nav.Link></ListGroup.Item>)}
                         </ListGroup>
                    </Col>
               </Row>


          </>

     );
}

export default Categories;