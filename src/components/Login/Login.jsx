import React from 'react'
import "../Login/Login.css"

import {useNavigate,Outlet} from 'react-router-dom'

import { useSelector, useDispatch,shallowEqual } from 'react-redux'
import {changeIssignin} from '../../redux/actions/issignin'

export default function Login () {
    const navigate = useNavigate()
    /* const [isLauncher,setisLauncher] = useState(true) */

    const issignin = useSelector(state => state.issignin,shallowEqual)
    const dispatch = useDispatch()

    const changesignin = data => {
        dispatch(changeIssignin(data))
    }
    
    
    return(
    <div className="fixed">
        <div className="form-demo">    
            <div className="switch"><h2>没有/已有账号？</h2></div>

            <input type="checkbox" style={{}} id="change"/>
            <label htmlFor="change">切 换</label>
  
            <div className="turn">
                <div className="over">
                    <form action="" className="login">
                    <h1>欢迎回来</h1>
                    <input type="text" placeholder="用户名"/>
                    <input type="password" placeholder="密码"/>
                    <input type="submit" className="btn" value="登 录" onClick={() => changesignin(issignin)}/>
                    </form>
                    <form action="" className="sign">
                    <h1>加入我们</h1>
                    <input type="text" placeholder="用户名"/>
                    <input type="password" placeholder="密码"/>
                    <input type="password" placeholder="确认密码"/>
                    <input type="submit" className="btn" value="注 册" onClick={()=>{}}/>
                    </form>
                </div>
                <div>
                <Outlet/>
                </div>
            </div>
        </div>
    </div>
    )
}

