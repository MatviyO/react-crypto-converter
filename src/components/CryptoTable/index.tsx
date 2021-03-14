import React, {useEffect} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {TCoin, TCoinDiff} from "../../types";
import {inject, observer} from "mobx-react";
import CurrenciesStore from "../../stores/currenciesStore";

interface ICtyptoTable {
    classes: any;
    currenciesStore?: CurrenciesStore;
}


const CryptoTable = inject('currenciesStore')(
    observer(({classes, currenciesStore}: ICtyptoTable) => {
            const items: TCoin[] = currenciesStore!.getItems;
            const diffObj: TCoinDiff = currenciesStore!.getDiffobject;


            useEffect(() => {
                // if (currenciesStore) {
                    currenciesStore?.fetchCoins()
                console.log(items)
                    setInterval(() => {
                        currenciesStore!.fetchCoins()
                    }, 30 * 1000)
                // }

            }, [])

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
                            {!items.length ? '...Loading' : items.map((coin) => (
                                <TableRow key={coin.name}>
                                    <TableCell><img className={classes.currencyIcon} src={coin.imageUrl}
                                                    alt={coin.name}/></TableCell>
                                    <TableCell align="left">{coin.name}</TableCell>
                                    <TableCell align="left">{coin.fullName}</TableCell>
                                    <TableCell className={diffObj[coin.name] && classes[`${diffObj[coin.name]}Column`]} align="left">${coin.price}</TableCell>
                                    <TableCell align="left">${coin.volume24Hour}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
    )
);


export default CryptoTable;
