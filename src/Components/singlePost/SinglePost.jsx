import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" alt="" src="img/1.png" />
        <h1 className="singlePostTitle">
          {" "}
          Laborum deserunt laborum voluptate .
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Muhmmad UFO</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Exercitation proident est duis minim cupidatat non enim est
          consectetur consequat non. Esse sit aliqua nisi mollit culpa aute ea
          et in occaecat et. In commodo tempor est minim fugiat excepteur anim
          veniam quis irure dolore aliquip. Ullamco nulla non duis cupidatat
          nostrud consequat dolor laborum non ullamco fugiat. Incididunt laboris
          aute sunt et deserunt commodo irure velit exercitation tempor dolore.
          Consectetur ad magna laborum fugiat sint cupidatat eiusmod mollit ad
          Lorem. Id excepteur consectetur velit irure eiusmod deserunt eu
          pariatur ad sunt magna. Exercitation proident est duis minim cupidatat
          non enim est consectetur consequat non. Esse sit aliqua nisi mollit
          culpa aute ea et in occaecat et. In commodo tempor est minim fugiat
          excepteur anim veniam quis irure dolore aliquip. Ullamco nulla non
          duis cupidatat nostrud consequat dolor laborum non ullamco fugiat.
          Incididunt laboris aute sunt et deserunt commodo irure velit
          exercitation tempor dolore. Consectetur ad magna laborum fugiat sint
          cupidatat eiusmod mollit ad Lorem. Id excepteur consectetur velit
          irure eiusmod deserunt eu pariatur ad sunt magna. Exercitation
          proident est duis minim cupidatat non enim est consectetur consequat
          non. Esse sit aliqua nisi mollit culpa aute ea et in occaecat et. In
          commodo tempor est minim fugiat excepteur anim veniam quis irure
          dolore aliquip. Ullamco nulla non duis cupidatat nostrud consequat
          dolor laborum non ullamco fugiat. Incididunt laboris aute sunt et
          deserunt commodo irure velit exercitation tempor dolore. Consectetur
          ad magna laborum fugiat sint cupidatat eiusmod mollit ad Lorem. Id
          excepteur consectetur velit irure eiusmod deserunt eu pariatur ad sunt
          magna.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
