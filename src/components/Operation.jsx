import React, {Component} from 'react';
import {depositAction, withdrawAction} from "../actions/accountActions.js";
import {store} from "../configureStore/store.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class Operation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0
        }
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-warning me-2" onClick={() => store.dispatch(withdrawAction(this.state.sum))}>Withdraw</button>
                <input  className=" bg-transparent text-white" onChange={e => this.setState({sum: +e.target.value})} type={'number'} value={this.state.sum}/>
                <button type="button" className="btn btn-dark ms-2" onClick={() => store.dispatch(depositAction(this.state.sum))}>Deposit</button>
            </div>
        );
    }
}

export default Operation;