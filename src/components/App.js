import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import marked from 'marked';

import * as actions from '../actions';

class App extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.isShowingHelp === true) {
      document.querySelector('.text-panel-left').setAttribute('readonly', 'true');
    }
  }

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

        <div className="main-content">

          <header>
            <h1 className="app-title">Markdown Previewer</h1>
            <div onClick={showHelp} className="help-button">
              <i className="fa fa-question" aria-hidden="true"></i>
            </div>
          </header>

          <div className="text-panels">
            <textarea
              value={textCurrent}
              onChange={(event) => enterText(event.target.value)}
              className="text-panel-left"></textarea>
            <div
              dangerouslySetInnerHTML={processedText}
              className="text-panel-right"></div>
          </div>

          <footer>
            <div>2017, created by Peter Krevenets</div>
          </footer>

        </div>

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
