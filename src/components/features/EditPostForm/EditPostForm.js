import PostForm from "../PostForm/PostForm";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { editPost } from "../../../redux/postRedux";
import { useParams } from "react-router-dom";
import { getPostById } from '../../../redux/postRedux';
import { useSelector } from "react-redux";
import dateFormat from "dateformat";
import { Navigate } from "react-router-dom";

const EditPostForm = () => {

     const { postId } = useParams();

     const dispatch = useDispatch();
     const navigate = useNavigate();

     const postData = useSelector((state) => getPostById(state, postId));

     const handleSubmit = post => {
               dispatch(editPost({ ...post, postId }));
               navigate('/')
     };

     const actionText = 'Edit post'
     if(!postData) return <Navigate to="/" />
     return (
          <>
               <h1>Edit Post</h1>
               <PostForm
                    action={handleSubmit}
                    actionText={actionText}
                    title={postData.title}
                    author={postData.author}
                    // publishedDate={dateFormat(postData.publishedDate, "yyyy-mm-dd")}
                    publishedDate={postData.publishedDate}
                    category={postData.category}
                    shortDescription={postData.shortDescription}
                    content={postData.content}
                    id={postId}
               />
          </>
     );
}

export default EditPostForm;