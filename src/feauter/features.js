import React,{Component} from 'react';
import List from './list';
import {parametrs} from '../api/api';
import Sites from "./sites";
import {connect} from "react-redux";

 class Features extends Component{
    componentDidMount() {
        const members = parametrs.getfeatures();
        members.then((mems)=>this.props.onFeatures(mems))

    }

    render(){
        return(
            <div>
            <div className='divfeatures'>
        {/*{this.props.featur.map((team,index) => (*/}
            {/*<List key={'list'+index}/>*/}
        {/*))}*/}
                <List />
                <List />
                <List />
                <List />
        </div>
                <Sites/>
            </div>)
    }
}
function mapStateToProps(state) {
    return{
        featur:state.featur
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onFeatures:(mem)=>{dispatch({type: "FEATUR",mem})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Features)