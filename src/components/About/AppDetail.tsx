import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
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

export default function AppDetail() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="about this application">
        <TableBody>
          <StyledTableRow key="versionNumber">
            <StyledTableCell component="th" scope="row">
              Version
            </StyledTableCell>
            <StyledTableCell align="right">
              {process.env.REACT_APP_VERSION}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="versionDate">
            <StyledTableCell component="th" scope="row">
              Last version date
            </StyledTableCell>
            <StyledTableCell align="right">
              2021-01-18
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="iconMadeBy">
            <StyledTableCell component="th" scope="row">
              Author
            </StyledTableCell>
            <StyledTableCell align="right">
              <a href="mailto:amwebexpert@gmail.com">amwebexpert@gmail.com</a>
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="iconMadeBy">
            <StyledTableCell component="th" scope="row">
              Icon author
            </StyledTableCell>
            <StyledTableCell align="right">
              <a href="https://therealjerrylow.com/">Jerry Low</a>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
