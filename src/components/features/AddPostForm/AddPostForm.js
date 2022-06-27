import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const handleSubmit = post => {
     dispatch(addPost(post));
     navigate('/')
     };

     const actionText = "Add post";

     return (
          <PostForm action={handleSubmit} actionText={actionText} />
     )
};

export default AddPostForm;