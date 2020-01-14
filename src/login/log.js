import React,{Component} from 'react';

export default class Login extends Component{
    isInvalid=(touched, valid)=> {
        return !valid && touched;
    };
    render(){
        const login=this.props.log;
        const pass=this.props.pass;
        return(<div className='divlogin'>
            <label className='loglab' htmlFor='inplog'>{login.label}</label>
            <input
                className='loginp'
                id='inplog'
                type={login.type}
                onChange={this.props.onChangelog}
            />
            {this.isInvalid(login.touched, login.valid)? <span className='spanlog' >{login.errorMessage}</span> : null}
            <label className='paslab' htmlFor='inppass' >{pass.label}</label>
            <input
                className='pasinp'
                id='inppass'
                type={pass.type}
                onChange={this.props.onChangepass}
            />
            {this.isInvalid(pass.touched, pass.valid) ? <span className='spanpass' >{pass.errorMessage}</span> : null}
            <button 
            className='btnlog' 
            disabled={this.props.disabled}
            onClick={this.props.onLogin}
            >Login</button>
            <button 
            className='btnreg' 
            disabled={this.props.disabled}
            onClick={this.props.onReg}
            >Register Now</button>
            <input type='checkbox'
                   className='checkbox'
                   id="inpcheck"
                   onClick={this.props.oncheckIn}
            />
            <label className='checklabel' htmlFor='inpcheck'>Admin</label>
        </div>)
    }
}