import UserTraining from './UserTraining/UserTraining'
import 'bootstrap-css-only'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 75,
    // maxWidth: 75
  },
});




const UserTrainingList = ({items, user, delTrainingToState}) =>{

  const classes = useStyles();
  
    return(
    
         <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                      <StyledTableCell>User_Training_Id</StyledTableCell>
                      <StyledTableCell align="right">Minutes</StyledTableCell>
                      <StyledTableCell align="right">Training Type</StyledTableCell>
                      <StyledTableCell align="right">User_Id</StyledTableCell>            
                      <StyledTableCell align="right">Weight</StyledTableCell>
                      <StyledTableCell align="right">Delete</StyledTableCell>
                      </TableRow>
                    </TableHead>
        <TableBody>
          {items.length > 0 ? items.map((item,index) => (
            <UserTraining  
            key={index} 
            {...item} 
            user= {user}
            delTrainingToState = {delTrainingToState} />
          )) : <TableRow>You dont have trainings yet!</TableRow>}
        </TableBody>
        </Table>
        </TableContainer>
     
    )
}

export default UserTrainingList