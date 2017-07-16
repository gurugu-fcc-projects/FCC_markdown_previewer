import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import marked from 'marked';

import * as actions from '../actions';
import '../styles/App.css';

class App extends Component {
  render() {
    const { textCurrent, enterText, showHelp } = this.props;
    const parsedText = marked(textCurrent, { sanitize: true});
    const processedText = { __html: parsedText };

    return (
      <div>
        <textarea
          value={textCurrent}
          onChange={(event) => enterText(event.target.value)} />
        <span dangerouslySetInnerHTML={processedText}></span>
        <button onClick={showHelp}>Press me</button>
      </div>
    );
  }

}

App.propTypes = {
  textCurrent: PropTypes.string,
  isShowingHelp: PropTypes.bool,
  enterText: PropTypes.func,
  showHelp: PropTypes.func,
};


const mapStateToProps = (state) => ({
  textCurrent: state.textCurrent,
  isShowingHelp: state.isShowingHelp,
});

export default connect(mapStateToProps, actions)(App);
