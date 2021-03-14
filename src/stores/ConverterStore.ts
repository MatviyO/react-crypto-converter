import {action, computed, observable} from "mobx";
import {TCoin} from "../types";

type TSelectedCoin = {
    name: string;
    price: number;
}

class ConverterStore {
    @observable private selectedCoin: TSelectedCoin = {
        name: '',
        price: 0
    };

    @computed
    get getSelectedCoin() {
        return this.selectedCoin
    }

    @action
    setSelectedCoin(coin: TCoin) {
        this.selectedCoin = {
            name: coin.name,
            price: coin.price
        }
    }

}

export default ConverterStore;
