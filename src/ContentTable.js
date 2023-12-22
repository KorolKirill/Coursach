import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import {StarRate} from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#55608f',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function ContentTable({servicesToShow, handleOpen}) {
    return (
        <TableContainer component={Paper}>
            <Table  aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell >Exchanger</StyledTableCell>
                        <StyledTableCell align="right">Give</StyledTableCell>
                        <StyledTableCell align="right">Get</StyledTableCell>
                        <StyledTableCell align="right">Min amount</StyledTableCell>
                        <StyledTableCell align="right">Max amount</StyledTableCell>
                        <StyledTableCell align="right">Review</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {servicesToShow.map((row) => (
                        <StyledTableRow key={row.service}>
                            <StyledTableCell component="th" scope="row">
                                {row.service}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.out + " " + row.to}</StyledTableCell>
                            <StyledTableCell align="right">{row.in + " " + row.from}</StyledTableCell>
                            <StyledTableCell align="right">{row.minamount}</StyledTableCell>
                            <StyledTableCell align="right">{row.maxamount}</StyledTableCell>
                            <StyledTableCell align="right">0</StyledTableCell>
                            <StyledTableCell align="right"><Button onClick={() => {handleOpen(row)}} variant="contained" endIcon={<StarRate />}>
                                Rate
                            </Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
