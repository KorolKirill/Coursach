import axios from 'axios'

export const LoginApi = {
    getUser: async (email) => {
        return await axios.post('http://localhost:5000/check/user', {
            email: email
        })
            .then(response => response.data)
            .catch(error => error.response.data)
    },
    setNewUser: async (fullname, emailAddress, password) => {
        return await axios.post('http://localhost:5000/new', {
            fullname: fullname,
            email: emailAddress,
            password: password
        })
            .catch(error => error.response.data)
    },

}