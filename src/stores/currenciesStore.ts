import {action, computed, observable} from "mobx";
import {TCoin} from "../types";
import axios from "axios";


type TCoinDiff = {[key: string]: string}

class CurrenciesStore {
    @observable private items: TCoin[] = [];
    @observable private diffObj: TCoinDiff = {};

    @computed
    get getItems() {
        return this.items;
    }

    @action
    setItems = (items: TCoin[]): void => {
        this.items = items;
        this.diffObj = this.diffCurriencies(this.items, items).reduce((initObj: TCoinDiff, newObj: TCoin) => {
            const oldObj: TCoin = this.items.find(el => el.name === newObj.name) || newObj;
            const color: string = newObj?.price > oldObj.price ? 'green' : 'red';

            initObj[newObj.name] = color;
            return initObj;
        }, {});
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
