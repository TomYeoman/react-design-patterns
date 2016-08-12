import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        console.log("TRYING TO SEND TO SERVER "+userData);
        return axios.post('/api/users', userData);

    }
}
