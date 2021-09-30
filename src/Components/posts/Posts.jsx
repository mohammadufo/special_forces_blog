import "./posts.css";
import Post from "./../post/Post";

const Posts = () => {
  return (
    <div className="posts">
      <Post img="img/8.jpg" title="Russian Special Forces SPETSNAZ" />
      <Post img="img/7.jpg" title="USA Special Forces Nevy Seals" />
      <Post img="img/16.jpg" title="IRAN Special Forces SABERIN" />
      <Post img="img/14.jpg" title="HEZBOLLAH Special Forces REZVAN" />
      <Post img="img/13.jpg" title="ENGLAND Special Forces SAS" />
      <Post img="img/12.jpg" title="FRENCH Special Forces GIGN" />
    </div>
  );
};

export default Posts;
