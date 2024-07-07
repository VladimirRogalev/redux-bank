import React, {Component} from 'react';
import {store} from "../configureStore/store.js";

class Balance extends Component {

    componentDidMount() {
       this.unsubscribe = store.subscriber(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div>
                <h1 className="text-white">Iron Bank of Braavos:</h1>
                <h2 className="text-white">Balance = {store.getState().balance} </h2>
            </div>
        );
    }
}

export default Balance;