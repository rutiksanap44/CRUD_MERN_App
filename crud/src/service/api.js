import axios from 'axios';

const URL = 'http://localhost:1023';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log(`Error occured while calling the API ${error}`)
    }
}