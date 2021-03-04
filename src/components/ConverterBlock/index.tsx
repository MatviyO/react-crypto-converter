import React from "react";
import {
    FormControl,
     InputLabel, MenuItem,
    Paper, Select,
   TextField
} from "@material-ui/core";

interface IConverterBlock {
    classes: any;
}

const ConverterBlock: React.FC<IConverterBlock> = ({ classes}) => {
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

export default ConverterBlock;
