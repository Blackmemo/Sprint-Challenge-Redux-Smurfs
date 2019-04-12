import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILED = 'FETCH_SMURF_FAILED';

const URL = 'http://localhost:3333/smurfs';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
  .get(`${URL}`)
  .then(res => {
    dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
  })
  .catch(err => {
    dispatch({ type: FETCH_SMURF_FAILED, payload: err.response });
  });
};

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED';

export const addSmurf = smurf => dispatch => {
dispatch({ type: ADD_SMURF_START });
axios
.post(`${URL}`, smurf)
.then(res => {
  dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
})
.catch(err => {
  dispatch({ type: ADD_SMURF_FAILED, payload: err.response });
});
};

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILED = 'DELETE_SMURF_FAILED';

export const deleteSmurf = smurf => dispatch => {
  dispatch ({type: DELETE_SMURF_START })
  axios
  .delete(`${URL}/${smurf}`)
  .then(res => {
    dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
  })
  .catch(err => {
    dispatch ({type: DELETE_SMURF_FAILED, payload: err.response })
  });
}

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILED = 'UPDATE_SMURF_FAILED';

export const updateSmurf = newSmurf => dispatch => {
  dispatch ({type: UPDATE_SMURF_START })
  axios
  .put(`${URL}/${newSmurf.id}`, newSmurf)
  .then(res => {
    dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch ({type: UPDATE_SMURF_FAILED, payload: err.response })
  });
};