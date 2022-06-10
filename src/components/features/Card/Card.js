import { useSelector } from "react-redux";
import Post from "../../pages/Post/Post";
import { getAllPosts } from "../../../redux/store";


const Card = () => {

     const posts = useSelector(getAllPosts)

     return (
          <>
               <div className="d-flex justify-content-between flex-wrap mt-5">
                    {posts.map(post => <Post key={post.id} title={post.title} author={post.author} publishedDate={post.publishedDate} shortDescription={post.shortDescription} postId={post.id} />)}
               </div>
          </>
     );
}

export default Card;