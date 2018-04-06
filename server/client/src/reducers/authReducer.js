import { FETCH_USER } from '../actions/types';

// possible returns
// null - request from server hasn't resolved yet
// payload - the request from server is back, user is indeed logged in
// false - the request from server returns, user is not logged in

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
