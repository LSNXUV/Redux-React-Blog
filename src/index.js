import React from 'react'
import reactDom from 'react-dom'
import App from './APP.jsx'

import store from './redux/store'
import {Provider} from 'react-redux'

//引入react-router-dom核心
import {BrowserRouter} from 'react-router-dom'


reactDom.render(
    /* 此处需要Provider包裹APP，让APP所有子组件接受到store */
    <Provider store={store}>  
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> 
,document.getElementById('root'))


/* store.subscribe(() => {
    reactDom.render(<App/>,document.getElementById('root'))

}) */

