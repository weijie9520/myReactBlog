/**
*作者: weijie
*功能描述: 渲染主页面文件
*参数说明:
*时间: 2018/4/16 10:53
*/
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducers'
import App from './main'
import "util/pace.js"
import  "util/pace/themes/blue/pace-theme-minimal.css"
import "style/basics.scss"
import "./font/Offline-Rough.otf"

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)