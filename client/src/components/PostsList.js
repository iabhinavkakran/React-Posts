import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const PostsList = () => {
  // using this for fetching data from backend
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className="posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start add some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
