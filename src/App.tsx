import React, {useEffect, useState} from 'react';
import {
    Container,
    createStyles,
    FormControl,
    Grid, InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TextField,
    Theme, Typography
} from "@material-ui/core";
import axios from 'axios'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(5)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },
        cryptoInputBox: {
            marginBottom: 20,
            marginTop: 10
        },
        currencyInput: {
            minWidth: 'calc(70% - 10px)',
            marginRight: 10
        },
        currencyType: {
            minWidth: '30%'
        },
        table: {
            minWidth: 650,
        },
    })
)

type TCoin = {
  name: string;
  fllName: string;
  imageUrl: string;
  price: number;
  volume24Hour: number;
}

function App() {
    const classes = useStyles();
    const [allCoins, setAllCoins] = useState<TCoin[]>([]);

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({data}) => {
            const coins = data.Data.map((coin: any) => {
                const obj: TCoin = {
                    name: coin.CoinInfo.Name,
                    fllName: coin.CoinInfo.FullName,
                    imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                    price: coin.RAW.USD.PRICE,
                    volume24Hour: coin.RAW.USD.VOLUME24HOUR,
                }
                return obj;
            });
            setAllCoins(coins);
        })
    }, [])
    
    return (
        <Container className={classes.root} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={8}>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="left">FullName</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">volume24hour</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allCoins.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell>123</TableCell>
                                        <TableCell align="left">{row.calories}</TableCell>
                                        <TableCell align="left">{row.fat}</TableCell>
                                        <TableCell align="left">{row.carbs}</TableCell>
                                        <TableCell align="left">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={4}>
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
                        <Typography variant="h5" component="h3">77,33 ukrainian </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
