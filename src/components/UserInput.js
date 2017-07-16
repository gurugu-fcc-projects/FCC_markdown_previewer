import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return (
      <div>
        <textarea
          value={this.props.rawMarkup}
          onChange={this.handleChange}></textarea>
        <div dangerouslySetInnerHTML={this.props.processedMarkup}></div>
      </div>
    );
  }
}

export default UserInput;
