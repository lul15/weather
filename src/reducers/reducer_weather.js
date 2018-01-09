import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      /*return state.concat([action.payload.data]);*/ //concat creates a new state, similar to line below
      return [action.payload.data, ...state]; 
  }
  return state;
}
