import React from "react";
import {Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {TCoin} from "../../types";

interface ICtyptoTable {
    items: TCoin[];
    classes: any;
}

const CryptoTable: React.FC<ICtyptoTable> = ({ items, classes}) => {
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">FullName</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">volume24hour</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { !items.length ? '...Loading': items.map((coin) => (
                        <TableRow key={coin.name}>
                            <TableCell><img className={classes.currencyIcon} src={coin.imageUrl} alt={coin.name}/></TableCell>
                            <TableCell align="left">{coin.name}</TableCell>
                            <TableCell align="left">{coin.fullName}</TableCell>
                            <TableCell align="left">${coin.price}</TableCell>
                            <TableCell align="left">${coin.volume24Hour}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CryptoTable;
