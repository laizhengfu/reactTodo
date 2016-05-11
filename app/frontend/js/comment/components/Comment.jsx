var React = require('react');
var marked = require('marked');
var Comment = React.createClass({
  handleDoubleClick: function () {
    $.ajax({
      url: this.props.url+ '/'+ this.props.commentId,
      dataType: 'json',
      type: 'DELETE',
      data: {id: this.props.commentId},
      success: function (data) {

      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    return (
      <div className="comment" onDoubleClick={this.handleDoubleClick}>
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {marked(this.props.children.toString(), {sanitize: true})}
      </div>
    );
  }
});

module.exports = Comment;