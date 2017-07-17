import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import marked from 'marked';

import * as actions from '../actions';

class App extends Component {
  render() {
    const {
      textCurrent,
      isShowingHelp,
      enterText,
      showHelp,
    } = this.props;
    const parsedText = marked(textCurrent, { sanitize: true});
    const processedText = { __html: parsedText };

    return (
      <div>

        {/* <textarea
          value={textCurrent}
          onChange={(event) => enterText(event.target.value)} />
        <span dangerouslySetInnerHTML={processedText}></span>
        <button onClick={showHelp}>Press me</button> */}
        {/* <div className={`animated ${isShowingHelp && 'show'}`}></div> */}

        <div className="main-content">

          <header>
            <h1 className="app-title">Markdown Previewer</h1>
            <div className="help-button">
              <i className="fa fa-question" aria-hidden="true"></i>
            </div>
          </header>

          <div className="text-panels">
            <textarea className="text-panel-left"></textarea>
            <div className="text-panel-right"></div>
          </div>

          <footer>
            <div>2017, created by Peter Krevenets</div>
          </footer>

        </div>

        {/* <div className="help-button">
          <i className="fa fa-question" aria-hidden="true"></i>
        </div> */}

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
