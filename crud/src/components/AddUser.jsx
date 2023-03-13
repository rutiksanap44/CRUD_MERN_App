import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material"

import { useState } from 'react';

import { addUser } from "../service/api";

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
    name : "",
    username : "",
    email : "",
    phone : ""
}


const AddUser = () => {

    const [user, setUser] = useState(defaultUser);

    const onValueChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    const addUserData = async () => {
        await addUser(user);
    }
    return (
        <Container>
        <Typography variant="h4">Enter Details</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'name' />
            </FormControl>
            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'username' />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'email' />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'phone' />
            </FormControl>
            <Button onClick={() => addUserData()} variant="contained">Add User</Button>
        </Container>
    )
}

export default AddUser;