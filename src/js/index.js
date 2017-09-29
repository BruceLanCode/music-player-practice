/**
 * Created by lantu on 2017/9/27.
 */

import React , { Component } from 'react';
import { render } from 'react-dom';
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import '../css/reset.css';


render(
    <AppContainer>
        <Root />
    </AppContainer>,
    // <Root />,
    document.getElementById('root')
);
if (module.hot) {
    module.hot.accept('./Root', () => {
        const NextApp = require('./Root').default;
        // console.log(NextApp)
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
