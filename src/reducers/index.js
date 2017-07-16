import { ENTER_TEXT, TOGGLE_HELP } from '../actions/types';

const INIT_STATE = {
  textCurrent: 'this is user input',
  textUser: 'this is user input',
  textHelp: 'this is help',
  isShowingHelp: false,
};

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ENTER_TEXT:
      return {
        ...state,
        textCurrent: action.payload,
        textUser: action.payload,
      };
    case TOGGLE_HELP: {
      // if help is already activated, hide it and show user input
      if (state.isShowingHelp) {
        return {
          ...state,
          textCurrent: state.textUser,
          isShowingHelp: false,
        }
      }
      // if help is not activated, hide user input and show help
      return {
        ...state,
        textCurrent: state.textHelp,
        isShowingHelp: true,
      }
    }
    default:
      return state;
  }
};

export default rootReducer;
