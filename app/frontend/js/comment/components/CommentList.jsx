var React = require('react');
var Comment = require('./Comment.jsx');
var CommentList = React.createClass({
  render: function () {
    var url = this.props.url;
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment url={url} commentId={comment.id} key={comment.id} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

module.exports = CommentList;