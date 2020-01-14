import React,{Component} from 'react';
import {
    // Switch,
    // Route,
    NavLink
} from "react-router-dom";
import '../App.css';



export default class Router extends Component{

    render(){
        return(<div className='header'>
            <nav className='navlink' style={{textAlign:'right',marginTop: '10px'}}>
                {(this.props.checkbool && typeof (this.props.checkbool) === "boolean" || this.props.checkbool === 'true')? <NavLink className='navlinks' to='/Admin' exact >Admin</NavLink> :
                null}
                <NavLink className='navlinks' to='/'  >Home</NavLink>
                <NavLink className='navlinks' to='/burger'  exact>Burger</NavLink>
                <NavLink className='navlinks' to='/youtube'  exact>YouTube</NavLink>
                <NavLink onClick={(e)=>{e.preventDefault();this.props.onLogout()}} className='navlinks' to='/logout' exact >LogOut</NavLink>
            </nav>
        </div>)
    }
}