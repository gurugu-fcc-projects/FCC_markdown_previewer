import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import marked from 'marked';

import UserInput from './UserInput';
import * as actions from '../actions';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'original text',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleClick() {
    this.setState({
      text: 'abracadabra'
    });
  }

  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Press me</button>
      </div>
    );
  }

}

App.propTypes = {
  rawMarkupUser: PropTypes.string,
  rawMarkupHelp: PropTypes.string,
  isShowingHelp: PropTypes.bool,
  enterMarkup: PropTypes.func,
  showHelp: PropTypes.func,
};


const mapStateToProps = (state) => ({
  rawMarkupUser: state.rawMarkupUser,
  rawMarkupHelp: state.rawMarkupHelp,
  isShowingHelp: state.isShowingHelp,
})

export default connect(mapStateToProps, actions)(App);
