import axios from 'axios'

export const MonitorApi = {
    getRates: async (xmlLink) => {
        return await axios.get(xmlLink)
            .then(response => response.data)
            .catch(error => error.response.data)
    },
    getRating: async () => {
        return await axios.get('http://localhost:5000/getRating')
            .then(response => response.data)
            .catch(error => error.response.data)
    },
    setRating: async (userId, exchangeId, score) => {
        return await axios.post('http://localhost:5000/setRating', {
            userId,
            exchangeId,
            score
        })
            .catch(error => error.response.data)
    },
    getExchanges: async () => {
        return await axios.get('http://localhost:5000/getExchanges')
            .then(response => response.data)
            .catch(error => error.response.data)
    },
    setExchange: async (name, link, rateLink) => {
        return await axios.post('http://localhost:5000/setExchange', {
            name, link, rateLink
        })
            .catch(error => error.response.data)
    },
    deleteExchange: async (id) => {
        return await axios.post('http://localhost:5000/deleteExchange', {
            id
        })
            .catch(error => error.response.data)
    },
}