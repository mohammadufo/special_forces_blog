import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ title, img }) => {
  return (
    <div className="post">
      <Link to="./post">
        <img className="postImg" alt="post" src={img} />
      </Link>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Military</span>
          <span className="postCat">Special Forces</span>
        </div>
        <Link className="link" to="./post">
          <span className="postTitle"> {title} </span>
        </Link>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>
  );
};

export default Post;
