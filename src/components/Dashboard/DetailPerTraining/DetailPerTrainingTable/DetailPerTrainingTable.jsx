import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//import utils
import {minutesPerTrainingRows} from '../../../../utils/utils.js'


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
  
  const useStyles = makeStyles({
    table: {
      minWidth: 75,
      // maxWidth: 75
    },
  });


const DetailPerTrainingTable = ({trainingTypes, userTrainingList}) => {

    const classes = useStyles();
    const rows = minutesPerTrainingRows({trainingTypes, userTrainingList})


    return(
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Training Type</StyledTableCell>
                        <StyledTableCell align="right">Calories Per Minute</StyledTableCell>
                        <StyledTableCell align="right">Acumulated Minutes</StyledTableCell>
                        <StyledTableCell align="right">Total Calories</StyledTableCell>                  
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.length > 0 ? rows.map((row) => (
                        <StyledTableRow key={row.trainingType.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.trainingType.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.trainingType.calories_per_minute}</StyledTableCell>
                        <StyledTableCell align="right">{row.acumulatedMinutes}</StyledTableCell>
                        <StyledTableCell align="right">{(row.trainingType.calories_per_minute*row.acumulatedMinutes)}</StyledTableCell>                       
                        </StyledTableRow>
                    )): <TableRow>You dont have trainings yet!</TableRow>}
                    </TableBody>
                </Table>
                </TableContainer>
    )
}

export default DetailPerTrainingTable