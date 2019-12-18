import React, { Component } from 'react';

import './login.css'


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true,
        }
    }
    render(){
        return(
            <div>
                <header>
                    Todo List Login 
                </header>
            <div className="box1">
            
            <div className="box">
            
                <div className="box2">
                <h1>Login</h1>
                    <div className="input">UserName: <input type="text" className="field"/></div>
                    <div className="input">Password : <input type="password" className="field" /></div>
                    <button className="btn">Login</button>
                </div>
            </div>
            </div>
         </div>
        )
    }
}
export default Login;