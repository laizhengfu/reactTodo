var React = require('react');
var marked = require('marked');
var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {marked(this.props.children.toString(), {sanitize: true})}
      </div>
    );
  }
});

module.exports = Comment;