var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
        <div className="commentList">
          Hello, world! I am a ComentList
        </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
        <div className="commentForm">
          Hello, world! I am a ComentForm
        </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
