import axios from 'axios'

//action types
export const GET_SMURF_START = "GET_SMURF-START"
export const GET_SMURF_SUCCESS = "GET_SMURF-SUCCESS"
export const POST_SMURF_START = "POST_SMURF-START"
export const POST_SMURF_SUCCESS = "POST_SMURF-SUCCESS"


//action creators (async)
export const getSmurf = () => {
    return dispatch => {
        //do async action here
        dispatch({ type: GET_SMURF_START});

        axios.get("http://localhost:3333/smurfs")
            .then(res => {
                dispatch({type: GET_SMURF_SUCCESS, payload: res.data.smurf})
            })
            .catch(err => console.log(err.res));
    };
};

export const postSmurf = () => {
    return dispatch => {
        dispatch({ type: POST_SMURF_START});

        axios.post("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data.smurf})
        })
        .catch(err => console.log(err.res));

    }
}
