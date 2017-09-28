/**
 * Created by lantu on 2017/9/28.
 */

import React, { Component } from 'react';

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.counterHandler = this.counterHandler.bind(this);
    }

    counterHandler(){
        this.setState((prevState,props) => ({
            count: prevState.count + 1
        }))
    }

    render(){
        return(
            <div>
                <button onClick={this.counterHandler}>Count {this.state.count}</button>
            </div>
        )
    }
}
