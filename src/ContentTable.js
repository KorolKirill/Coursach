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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1Mile', 159, 6.0, 24, 4.0),
    createData('4ange', 237, 9.0, 37, 4.3),
    createData('60cek', 262, 16.0, 24, 6.0),
    createData('ABCObmen', 305, 3.7, 67, 4.3),
    createData('BTCBOSS', 356, 16.0, 49, 3.9),
];

export default function ContentTable() {
    return (
        <TableContainer component={Paper}>
            <Table  aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell >Exchanger</StyledTableCell>
                        <StyledTableCell align="right">Give</StyledTableCell>
                        <StyledTableCell align="right">Get</StyledTableCell>
                        <StyledTableCell align="right">Reserve</StyledTableCell>
                        <StyledTableCell align="right">Review</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            <StyledTableCell align="right"><Button variant="contained" endIcon={<StarRate />}>
                                Rate
                            </Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
