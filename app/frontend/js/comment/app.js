var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/CommentBox.jsx');
var CommentData = require('./components/data.jsx');
ReactDOM.render(
  <CommentBox data={CommentData} />,
  document.getElementById('content')
);