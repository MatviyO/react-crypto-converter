import {action, computed, observable} from "mobx";
import {TCoin} from "../types";
import axios from "axios";


class CurrenciesStore {
    @observable private items: TCoin[] = [];

    @computed
    get getItems() {
        return this.items;
    }

    @action
    setItems = (items: TCoin[]): void => {
        this.items = items;
    }

    @action
    fetchCoins = () => {
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
            this.items = coins;
        })
    }

    diffCurriencies(arr1: TCoin[], arr2: TCoin[]) {
        return arr1.filter((obj, index) => {
            if(obj.price !== arr2[index].price) {
                return true;
            }
            return false;
        })
    }

}

export default CurrenciesStore
