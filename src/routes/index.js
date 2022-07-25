import Login from '../components/Login/Login';
import Home from '../components/Home/Home';

import {Navigate} from 'react-router-dom'

export default [

    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/home',
        element:<Home/>
    }
    ,
    {
        path:'/',
        element:<Navigate to='/login'/>,
    },
]