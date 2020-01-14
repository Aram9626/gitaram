import React,{Component} from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {parametrs} from "../api/api";
import Change from "./changeinp";
import axios from 'axios'
import {connect} from "react-redux";

 class MemberFuter extends Component{
    componentDidMount() {
        const memberteam = parametrs.getteams();
        memberteam.then((mems)=>this.props.onTeams(mems));
        const memberuser = parametrs.getusers();
        memberuser.then((mems)=>this.props.onUsers(mems))
    }
    onDeluser=(id)=>{
        parametrs.deluser(id).then(()=>{
            const del=parametrs.getusers();
            del.then((mem)=>{
                this.props.onUsers(mem)
            });
        })
    };
    onEdit=(index)=>{
        this.props.onEdit(true,index)
    };
    isEmail=(email)=> {
        var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(String(email).toLowerCase());
    };
    validcontrol=(value,validation)=>{
        let valid = true;
        if(validation.required){
            valid = value.trim() !== '' && valid;
        }
        if(validation.email){
            valid = this.isEmail(value) && valid;
        }
        if(validation.minlength){
            valid = value.length >= validation.minlength && valid;
        }
        return valid;

    };
    onChange=(e,name)=>{
        const formControls={...this.props.formControls};
        const control={...formControls[name]};
        control.value=e.target.value;
        control.touched=true;
        control.valid=this.validcontrol(control.value,control.validation);
        formControls[name]=control;
        this.props.onReducerChange(formControls)
    };
    onSave=(index)=>{
        const user=parametrs.getusers();
        user.then((mem)=>{
            const newuser={
                login:this.props.formControls.login.value,
                password:this.props.formControls.password.value,
                rol:mem[index].rol,
                id:mem[index].id
            };
            axios.put('http://localhost:3001/users/'+mem[index].id,newuser)
                .then((res)=>{
                    this.props.onEdit(false);
                    console.log('ok',mem)
                }).catch((err)=>{
                    console.log('error',err)
            });
            parametrs.getusers().then(mems=>{
                this.props.onUsers(mems);
            })
        });

    };
    render(){
        return(<div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>users</th>
                    <th>Login</th>
                    <th>Password</th>
                    <th>Rol</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map((user,index)=>{
                    return( <tr key={'trteam'+index}>
                        <td>{index}</td>
                        <td> {(this.props.edit===true && this.props.index===index)?
                            <Change control={this.props.formControls.login} onChange={(e)=>this.onChange(e,'login')}/>
                            :user.login}</td>
                        <td>{(this.props.edit===true && this.props.index===index)?
                            <Change control={this.props.formControls.password} onChange={(e)=>this.onChange(e,'password')}/>
                            : user.password}</td>
                        <td>{user.rol}</td>
                        <td>
                            {(this.props.edit===true && this.props.index===index)?
                                <Button variant="success" onClick={()=>this.onSave(index)}><i
                                    className="fas fa-save"></i></Button>
                            :<Button variant="primary" onClick={()=>this.onEdit(index)}><i
                                    className='fas fa-pencil-alt'></i></Button>}
                        </td>
                        <td><Button variant="danger" onClick={()=>{this.onDeluser(user.id)}}><i
                            className='fas fa-trash-alt'></i></Button></td>
                    </tr>)
                })}
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>team</th>
                    <th>name</th>
                    <th>developer</th>
                    <th>image</th>
                </tr>
                </thead>
                <tbody>
                {this.props.teams.map((team,index)=>{
                    return( <tr key={'trteam'+index}>
                        <td>{team.id}</td>
                        <td>{team.name}</td>
                        <td>{team.developer}</td>
                        <td>{team.image}</td>
                    </tr>)
                })}
                </tbody>
            </Table>
            <Button className="goback" onClick={()=>{this.props.history.goBack()}} variant="dark">goBack</Button>
        </div>)
    }
}

function mapStateToProps(state) {
    return{
        teams:state.teams,
        users:state.users,
        edit:state.edit,
        index:state.index,
        formControls:state.formControls,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onTeams:(mem)=>{dispatch({type: "TEAMS",mem})},
        onUsers:(mem)=>{dispatch({type: "USERS",mem})},
        onEdit:(bool,value)=>{dispatch({type: "EDIT",bool,value})},
        onReducerChange:(value,mem)=>{dispatch({type: "FORMCONTROLS",value,mem})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberFuter)