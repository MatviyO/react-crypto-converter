import React, {useEffect, useState} from 'react';
import {
    Container,
    Grid
} from "@material-ui/core";
import axios from 'axios'
import {TCoin} from "./types";
import {ConverterBlock, CryptoTable} from "./components";
import useStyles from "./styles/styles";

function App() {
    const classes = useStyles();
    const [allCoins, setAllCoins] = useState<TCoin[]>([]);

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({data}) => {
            const coins: TCoin[] = data.Data.map((coin: any) => {
                const obj: TCoin = {
                    name: coin.CoinInfo.Name,
                    fullName: coin.CoinInfo.FullName,
                    imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                    price: coin.RAW.USD.PRICE.toFixed(4),
                    volume24Hour: coin.RAW.USD.VOLUME24HOUR.toFixed(4),
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
                    <CryptoTable items={allCoins} classes={classes} />
                </Grid>
                <Grid item xs={4}>
                    <ConverterBlock classes={classes}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
