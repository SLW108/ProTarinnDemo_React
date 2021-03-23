import {deleteTraining} from '../../../../services/api'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);





const UserTraining = ({id, minutes, trainning_type, weight, user_id, user, delTrainingToState}) => {

  const onHandleClick = (e) => {
      deleteTraining(user_id, id, user.token)
      .then(resp=>{
        delTrainingToState(id)
          console.log(resp)
      }).catch(err=>console.log(err))
  }

    return(
        <StyledTableRow>
        <StyledTableCell component="th" scope="row">{id}</StyledTableCell>
        <StyledTableCell align="right">{minutes}</StyledTableCell>
        <StyledTableCell align="right">{trainning_type}</StyledTableCell>
        <StyledTableCell align="right">{user_id}</StyledTableCell>
        <StyledTableCell align="right">{weight}</StyledTableCell>
        <StyledTableCell align="right">
          <button className='btn btn-danger' onClick={onHandleClick} >Delete</button>
        </StyledTableCell>
      </StyledTableRow>
    )
}

export default UserTraining