import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material"

import { useState, useEffect } from 'react';

import { editUser, getUser } from "../service/api";

import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
width : 50%;
margin : 5% auto 0 auto;
& > div {
    margin : 20px
};
& > button {
    font-weight : 500;
    font-size : 15px
}
`
const defaultUser = {
    name: "",
    username: "",
    email: "",
    phone: ""
}


const EditUser = () => {

    const [user, setUser] = useState(defaultUser);

    const navigate = useNavigate();

    const { id } = useParams()

    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async () => {
        const response = await getUser(id)
        setUser(response.data)
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserData = async () => {
        await editUser(user, id);
        navigate('/all')
    }
    return (
        <Container>
            <Typography variant="h4">Edit Details</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} />
            </FormControl>
            <Button onClick={() => editUserData()} variant="contained">Edit User</Button>
        </Container>
    )
}

export default EditUser;