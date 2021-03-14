import React from "react";
import {
    FormControl,
    InputLabel, MenuItem,
    Paper, Select,
    TextField
} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import CurrenciesStore from "../../stores/currenciesStore";
import ConverterStore from "../../stores/ConverterStore";

interface IConverterBlock {
    classes: any;
    currenciesStore?: CurrenciesStore;
    converterStore?: ConverterStore;
}


const ConverterBlock = inject('currenciesStore', 'converterStore')(
    observer(({classes, currenciesStore, converterStore}: IConverterBlock) => {

            return (
                <Paper className={classes.paper}>
                    <div className={classes.cryptoInputBox}>
                        <FormControl className={classes.currencyInput}>
                            <TextField fullWidth label="Total"/>
                        </FormControl>
                        <FormControl className={classes.currencyType}>
                            <InputLabel shrink>Currency</InputLabel>
                            <Select value={10}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={classes.cryptoInputBox}>
                        <FormControl className={classes.currencyInput}>
                            <TextField fullWidth label="Total"/>
                        </FormControl>
                        <FormControl className={classes.currencyType}>
                            <InputLabel shrink>Currency</InputLabel>
                            <Select value={10}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Paper>
            )
        }
    )
);


export default ConverterBlock;
