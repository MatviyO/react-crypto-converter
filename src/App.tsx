import React from 'react';
import {
    Container,
    createStyles,
    FormControl,
    Grid, InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    TextField,
    Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },

        currencyInput: {
            minWidth: 'calc(70% - 10px)',
            marginRight: 10
        },
        currencyType: {
            minWidth: '30%'
        }
    })
)
function App() {
    const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <div >
                        <FormControl className={classes.currencyInput}>
                            <TextField fullWidth label="Total" />
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
                    <div >
                        <FormControl className={classes.currencyInput}>
                            <TextField fullWidth label="Total" />
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
            </Grid>
        </Grid>
    </Container>
  );
}

export default App;
