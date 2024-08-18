import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPost = posts.map((post) => (
    <article style={{color:"white"}} key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section style={{color:"white",border:"1px solid grey", width:"50%"}}>
      <h2>Posts</h2>
      {renderedPost}
    </section>
  );
};

export default PostList;
