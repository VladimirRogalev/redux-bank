import Store from "../redux/Store.js";
import {accountReducer} from "../reducer/accountReducer.js";

const initialState = {
    balance: 0
};
export const store = new Store(initialState, accountReducer);