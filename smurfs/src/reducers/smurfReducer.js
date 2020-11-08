import { GET_SMURF_START, GET_SMURF_SUCCESS, POST_SMURF_START, POST_SMURF_SUCCESS } from '../actions/smurfActions';

const initialState = {
    isLoading: false,
    smurf: [],
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_SMURF_SUCCESS:
            return {
                isLoading: false,
                smurf: action.payload,
                error: action.payload
            };
        case POST_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_SMURF_SUCCESS:
            return {
                isLoading: false,
                smurf: action.payload,
                error: action.payload
            }
        default:
            return state;
    };
};
