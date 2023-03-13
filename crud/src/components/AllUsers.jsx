import { Table, TableHead, TableCell, TableBody, TableRow, styled, Button } from '@mui/material'

import { getUsers, deleteUser } from '../service/api'

import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const StyledTable = styled(Table)`
    width: 70%;
    margin : 50px auto 0 auto;
`

const HeadTable = styled(TableRow)`
background-color : #000000;
& > th {
    color: #fff
}
`

const FontTableRow = styled(TableRow)`
& > td {
    font-size : 18px;
}
`

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {
        const response = await getUsers();
        setUsers(response.data)
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id)
    }

    return (
        <StyledTable>
            <TableHead>
                <HeadTable>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </HeadTable>
            </TableHead>
            <TableBody>
                {
                    users.map(data => (
                        <FontTableRow key={data._id}>
                            <TableCell>{data._id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{ marginRight: 10 }} component={Link} to={`/edit/${data._id}`}>Edit</Button>
                                <Button variant='contained' color='secondary' onClick={() => deleteUserDetails(data._id)}>Delete</Button>
                            </TableCell>
                        </FontTableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;