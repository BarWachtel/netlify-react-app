import React, { Component } from 'react';

class HelloWorld extends Component {
  render () {
    return <div>
      <p>Hello world! from {this.props.from}</p>
    </div>
  }
}

export default HelloWorld