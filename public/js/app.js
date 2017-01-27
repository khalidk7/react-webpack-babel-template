import React from 'react';
import ReactDOM from 'react-dom';

//import Hello from "./components/Hello";

//ReactDOM.render(<Hello />, document.getElementById('react'));

class Hello extends React.Component {
  render()  {
    return (
      <h3>hi react</h3>
    );
  }
}

ReactDOM.render(<Hello/>, document.getElementById('react'));



/*
var Hello = React.createClass({
  render: function()  {
    return React.createElement("h3", null, "hi React");
  }
});

ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
*/
console.log("hi");
