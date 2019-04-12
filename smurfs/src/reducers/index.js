import {
FETCH_SMURF_START,
FETCH_SMURF_SUCCESS,
FETCH_SMURF_FAILED,
ADD_SMURF_START,
ADD_SMURF_SUCCESS,
ADD_SMURF_FAILED,
DELETE_SMURF_START,
DELETE_SMURF_SUCCESS,
DELETE_SMURF_FAILED,
UPDATE_SMURF_START,
UPDATE_SMURF_SUCCESS,
UPDATE_SMURF_FAILED
} from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };


 const reducer = (state = initialState, action) => {
   switch(action.type) {
    case FETCH_SMURF_START:
    return {
      ...state,
      error: '',
      fetchingSmurfs: true
    };
    case FETCH_SMURF_SUCCESS:
    return {
      ...state,
      error: '',
      fetchingSmurfs: false,
      smurfs: action.payload
    };
    case FETCH_SMURF_FAILED:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    };
    case ADD_SMURF_START:
    return {
      ...state,
      fetchingSmurfs: true,
      addingSmurf: true,
      error: ''
    };
    case ADD_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false,
      addingSmurf: false,
      error: ''
    };
    case ADD_SMURF_FAILED:
    return {
      ...state,
      fetchingSmurfs: false,
      addingSmurf: false,
      error: action.payload
    };
    case DELETE_SMURF_START:
    return {
      ...state,
      fetchingSmurfs: true,
      deletingSmurf: true,
      error: ''
    };
    case DELETE_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false,
      deletingSmurf: false,
      error: ''
    };
    case DELETE_SMURF_FAILED:
    return {
      ...state,
      fetchingSmurfs: false,
      deletingSmurf: false,
      error: action.payload
    };
    case UPDATE_SMURF_START:
    return {
      ...state,
      fetchingSmurfs: true,
      updatingSmurf: true,
      error: ''
    }
    case UPDATE_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false,
      updatingSmurf: false,
      error: ''
    };
    case UPDATE_SMURF_FAILED:
    return {
      ...state,
      fetchingSmurfs: false,
      updatingSmurf: false,
      error: action.payload
    };
    default:
    return state;
   }
 }
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default reducer;