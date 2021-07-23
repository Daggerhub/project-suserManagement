import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, makeStyles} from '@material-ui/core'
import { fetchUser } from '../api/index';
import { useParams } from 'react-router-dom'
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
    const [user, setUser] = useState([]);
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        getUser();
    },);

    const getUser = async () => {
        let response = await fetchUser(id);
        setUser(response.data.data);
    }

    return (
        <div className= {classes.tableContainer}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
             <TableBody>
                    <TableRow className={classes.row} key={user.id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                
            </TableBody>

        </Table>
        </div>
    )
}

export default Users;