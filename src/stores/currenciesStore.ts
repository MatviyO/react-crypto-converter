import {action, computed, observable} from "mobx";
import {TCoin, TCoinDiff} from "../types";
import axios from "axios";


class CurrenciesStore {
    @observable private items: TCoin[] = [];
    @observable private diffObj: TCoinDiff = {};

    @computed
    get getItems() {
        return this.items;
    }

    @computed
    get getDiffobject() {
        return this.diffObj;
    }

    @action
    setItems = (items: TCoin[]): void => {
        this.diffObj = this.diffCurriencies(this.items, items).reduce((initObj: TCoinDiff, obj: TCoin) => {
            const newObj: TCoin = items.find(o => o.name === obj.name)!;
            const oldObj: TCoin = this.items.find(el => el.name === newObj.name)!;
            const color: string = newObj.price === oldObj.price ? '': newObj.price > oldObj.price ? 'green' : 'red';

            initObj[newObj.name] = color;
            return initObj;
        }, {});
        this.items = items;
        setTimeout(() => {
            this.diffObj = {};
        }, 15000)
    }

    @action
    fetchCoins = async() => {
        await axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({data}) => {
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
            this.setItems(coins)
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
