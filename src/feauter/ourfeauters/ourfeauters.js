import React,{Component} from 'react';
import {parametrs} from "../../api/api";
import Futer from "./feauter";
import {connect} from "react-redux";
 class OurFeauter extends Component{
    componentDidMount() {
        const members = parametrs.getfeatures();
        members.then((mems)=>this.props.onFeatures(mems))
    }
    render() {
        return (<div className='ourfuter'>
                <div className='divnamefuter'><h1>Our Feauter</h1></div>
                {this.props.featur.map((team,index) => (
                    <Futer key={'futer'+index}
                           name={team.name}
                           fname={team.fullname}
                    />
                ))}
            </div>
        )
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
export default connect(mapStateToProps,mapDispatchToProps)(OurFeauter)