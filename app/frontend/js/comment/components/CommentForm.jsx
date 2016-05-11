var React = require('react');
var CommentForm = React.createClass({
  getInitialState: function () {
    return {author: '', text: ''}
  },
  handleAuthorChange: function (e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function (e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      alert('validate failed!');
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function () {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          value={this.state.author}
          type="text"
          placeholder="Your name"
          onChange={this.handleAuthorChange}
        />
        <input
          value={this.state.text}
          type="text"
          placeholder="Say something..."
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post"/>
      </form>
    );
  }
});

module.exports = CommentForm;