import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../Utility';

const initialState = {
  results: []
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})});
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.resultId);
      return updateObject(state, {results: updatedArray});
  }
  return state;
};

export default Reducer;