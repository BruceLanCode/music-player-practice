/**
 * Created by lantu on 2017/9/28.
 */

import React, { Component } from 'react';
import Button from './component/button'

 export default class extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>Hello world!!!</p>
                <Button></Button>
            </div>
        )
    }
}