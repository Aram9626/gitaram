import React,{Component} from 'react';
import Login from "./log";
import {connect} from "react-redux";

 class Auth extends Component{
    onlogin=()=>{
        const login=this.props.formControls.login.value;
        const password=this.props.formControls.password.value;
        this.props.onLogIn(login,password)
    };
    onregister=()=>{
        const login=this.props.formControls.login.value;
        const password=this.props.formControls.password.value;
        this.props.onRegNow(login,password)
        };
    validateEmail=(email)=> {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
        validationcontrol=(value,validation)=>{
            let valid = true;
            if(validation.required){
                valid = value.trim() !== '' && valid;
            }
            if(validation.email){
                valid = this.validateEmail(value) && valid;
            }
            if(validation.minlength){
                valid = value.length >= validation.minlength && valid;
            }
        return valid;
    };


    onChangeHandler=(e,name)=>{
         const formControls={...this.props.formControls};
        const control={...formControls[name]};
        control.value=e.target.value;
        control.touched=true;
        control.valid=this.validationcontrol(control.value,control.validation);
        formControls[name]=control;
        let  isValid=true;
        Object.keys(formControls).forEach((n)=>{
            isValid = formControls[n].valid && isValid;
        });
        this.props.onReducerChange(formControls,isValid)
       

    };
    render() {
        return (
            <div>
                <Login
                    oncheckIn={this.props.oncheckIn}
                    onLogin={this.onlogin}
                    onReg={this.onregister}
                    onChangelog={e=>{this.onChangeHandler(e,'login')}}
                    onChangepass={e=>{this.onChangeHandler(e,'password')}}
                    disabled={!this.props.isValid}
                    log={this.props.formControls.login}
                    pass={this.props.formControls.password}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        formControls:state.formControls,
        isValid:state.isValid
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onReducerChange:(value,mem)=>{dispatch({type: "FORMCONTROLS",value,mem})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Auth)
