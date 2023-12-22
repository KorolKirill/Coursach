import axios from 'axios'

export const MonitorApi = {
    getRates: async (xmlLink) => {
        return await axios.get(xmlLink)
            .then(response => response.data)
            .catch(error => error.response.data)
    }
}