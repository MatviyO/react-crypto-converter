import CurrenciesStore from "./currenciesStore";
import ConverterStore from "./ConverterStore";

const stores = {
    currenciesStore: new CurrenciesStore(),
    covertStore: new ConverterStore()
}

export default stores;
