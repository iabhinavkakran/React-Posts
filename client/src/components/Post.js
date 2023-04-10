import React from "react";
import { Link } from "react-router-dom";

const Post = ({ author, body, id }) => {
  return (
    <div className="post">
      <Link to={id}>
        <p className="author">{author}</p>
        <p className="text">{body}</p>
      </Link>
    </div>
  );
};

export default Post;
