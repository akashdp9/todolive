import React, { Component } from 'react';
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
                <div>
                    UserName: <input type="text"/>
                    Password : <input type="password" />
                    <button >Submit</button>
                </div>
            </div>
        )
    }
}
export default Login;