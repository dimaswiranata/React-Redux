import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../Utility';

const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.resultId);
  return updateObject(state, {results: updatedArray});
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})});
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }
  return state;
};

export default Reducer;