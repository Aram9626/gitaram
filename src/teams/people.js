import React,{Component} from 'react';
import {parametrs} from "../api/api";
import {connect} from "react-redux";

 class People extends Component{
    componentDidMount() {
        const members = parametrs.getteam(+this.props.match.params.man);
        members.then((mems)=>{
            if(!!mems){
                this.props.onPeople(mems)
                }else{
                    this.props.history.push('/')
                }
        });

    }
    render() {
        return(<div className='divpeople'>
            <img style={{width: '30%'}} src={window.location.origin+"/"+this.props.people.image}/>
            <h1>{this.props.people.name} is {this.props.people.developer} </h1>
            <button onClick={()=>{this.props.history.goBack()}}>goBack</button>
        </div>)
    }
}
function mapStateToProps(state) {
    return{
        people:state.mod
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onPeople:(value)=>{dispatch({type: "MODAL",value})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(People)