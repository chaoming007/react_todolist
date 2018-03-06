import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store/store'
import App from './components/App'
import './css/main.scss'

ReactDom.render(
    <Provider store={ Store }>
         <App />
    </Provider>,
    document.querySelector("#app")
)