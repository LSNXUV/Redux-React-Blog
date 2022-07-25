import React from 'react';

import { useSelector,useDispatch,shallowEqual } from 'react-redux'

import Login from './components/Login/Login'
import Home from './components/Home/Home'


export default function App () {

    /* const [isLauncher,setisLauncher] = useState(true) */

    const issignin = useSelector(state => state.issignin,shallowEqual)
    // const dispatch = useDispatch()
    
    return (
    <>
        {issignin ? <Home/> : <Login/>}
        {/* <Login/>   */}
        
    </>)
  
}
