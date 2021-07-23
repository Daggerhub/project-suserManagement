import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles} from '@material-ui/core'
import { fetchUsers, deleteUser } from '../api/index';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({

    tableContainer : {
        display: 'flex',
        justifyContent: 'center'
    },

    table: {
        width: '70%',
        margin: '50px 0 0 50px',
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const Users = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await fetchUsers();
        setUsers(response.data.data);
    }

    return (
        <div className= {classes.tableContainer}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    {/* <TableCell>Email</TableCell> */}
                    {/* <TableCell>Phone</TableCell> */}
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
             <TableBody>
                 {users.map((user) => (
                    <TableRow className={classes.row} key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        {/* <TableCell>{user.email}</TableCell> */}
                        {/* <TableCell>{user.phone}</TableCell> */}
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" style={{marginRight:10}} onClick={()=>deleteUserData(user._id)}>Delete</Button>
                            <Button color="secondary" variant="contained" component={Link} to={`/${user._id}`}>View</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
        </div>
    )
}

export default Users;