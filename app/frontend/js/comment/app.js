var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/CommentBox.jsx');
var CommentData = require('./components/data.jsx');
ReactDOM.render(
  <CommentBox url="/api/comments" />,
  document.getElementById('content')
);