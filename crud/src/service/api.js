import axios from 'axios';

const URL = 'http://localhost:1023';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log(`Error occured while calling the API ${error}`)
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log(`Error while getting the data - ${error}`)
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(`Error while getting the data - ${error}`)
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.post(`${URL}/${id}`, user)
    } catch (error) {
        console.log(`Error while editing the data - ${error}`)
    }
}
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log(`Error while deleting the data - ${error}`)
    }
}