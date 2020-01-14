import React, { Component } from 'react';
import './App.css';
import Header from "./header/header";
import Mein from "./feauter/mein";
import Features from './feauter/features';
import Auth from './login/Auth';
import axios from 'axios'
import {Switch, Route,
  // NavLink
} from "react-router-dom";
import Admin from "./inadmin/admin";
import Burger from './burger/burger';
import {connect} from "react-redux";
import Youtube from "./youtube/youtube";


class App extends Component {
  state={
    islogin:localStorage.getItem('login'),
    rol:1,
    bool:localStorage.getItem('bool')
  };
  loginHandler=(login,password)=>{
    axios.get('http://localhost:3001/users')
    .then((response)=>{
      // console.log(response)
      let data = response.data;
      data.forEach(e => {
        if(e.login===login && e.password===password){
          this.setState({
            islogin:true
          });
          window.localStorage.setItem('login',true);
          if(e.rol===0){
            this.setState({bool:true});
            window.localStorage.setItem('bool',true);
          }
          else{
            this.setState({bool:false});
            window.localStorage.setItem('bool',false);
          }


        }
      });
    })
  };
  registerHandler=(login,password)=>{
    const user = {
      login,
      password,
      rol:this.state.rol
    };
    axios.post('http://localhost:3001/users',user).then((res)=>{
      console.log('register sccessfully!!');
      this.setState({
        islogin: true,
        bool: this.state.rol===0
      });
      window.localStorage.setItem('bool',this.state.rol===0);
      window.localStorage.setItem('login',true)
    }).catch((error)=>{
      console.log('register failed',error)
    })
  };
  isLogout=()=>{
    this.setState({islogin:false,bool:false,rol:1});
    window.localStorage.removeItem('login');
    window.localStorage.removeItem('bool');
  };
  checkbox=()=>{
    this.setState({rol:0})
  };
  render() {

    return (
      <div className="App">
    {this.state.islogin?
        <div>
          <Header onLogout={this.isLogout} checkbool={this.state.bool}/>
          <Switch>
          {this.state.bool ?
            <Route path='/Admin' exact component={Admin}/> :
            null
          }
            <Route path='/youtube' exact  component={Youtube}/>
          <Route path='/burger' exact  component={Burger}/>
          <Route path='/' component={Mein}/>
          </Switch>
          <Features/>
        </div>:<Auth
                    oncheckIn={this.checkbox}
                    onLogIn={this.loginHandler}
                    onRegNow={this.registerHandler}
                    /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    layers:state.layers,

  }
}
function mapDispatchToProps(dispatch) {
  return{
    onLayers:(mem)=>{dispatch({type: "LAYERS",mem})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
