import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  // pieceOfState: providerOfState
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
