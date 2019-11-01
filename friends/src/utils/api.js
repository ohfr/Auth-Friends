import axios from 'axios';

export const api = () => {
    return axios.create({
        baseURL: "http:localhost:8080",
        heanders: {
            authorization: getToken()
        }
    })
}

export const getToken = () => {
    return localStorage.getItem('token')
}