import React,{Component} from 'react';
import {connect} from "react-redux";
import {parametrs} from "../api/api";
import Button from 'react-bootstrap/Button'
class Burger extends Component{
    state={
        arr:[],
        sum:0,
        height: 600
    };
    componentDidMount() {
        const memberteam = parametrs.getlayers();
        memberteam.then((mems)=>{
            this.props.onLayers(mems);
            let arr=this.state.arr;
            arr.push({...mems[0],rol:1},{...mems[mems.length-1],rol:1});
            this.setState({arr,sum:(mems[0].price+mems[mems.length-1].price)})

        });
    }
    Chengselect=(e)=>{
        const memberteam = parametrs.getlayers();
        memberteam.then((mems)=>mems.forEach((mem)=>{
            if(mem.name===e){
                let arr=this.state.arr;
                let sum=this.state.sum;
                let height=this.state.height;
                height+=110;
                sum +=mem.price;
                arr.splice(arr.length-1,0,mem );
                this.setState({arr,sum,height})
            }
        }));
    };
    ChangeList=(e,index)=>{
        const memberteam = parametrs.getlayers();
        memberteam.then((mems)=>mems.forEach((mem)=>{
            if(mem.name===e){
                let sum=this.state.sum;
                let arr=this.state.arr;
                let res= mem.price-arr[index].price;
                sum += res;
                arr[index]=mem;
                this.setState({arr,sum})
            }
        }));
    };
    DelLayer=(index)=>{
        let arr=this.state.arr;
        let sum=this.state.sum;
        sum-=arr[index].price;
        arr.splice(index,1);
        this.setState({arr,sum})
    };
    render() {
        return(<div className="burger" style={{height:`${this.state.height}px`}}>
            <br/>
            <div className='burgersum'>SUM = <span>{this.state.sum}</span></div>
            <div className='selectburg'>
                <select style={{width: "170px",height:'30px'}} onChange={(e)=>this.Chengselect(e.target.value)} >
                    {this.props.layers.map((layer,index)=>{
                        return(<option key={'layer'+index}>{layer.name}</option>)
                    })}
                </select>
            </div>
            <div className="burgerimg">
                {this.state.arr.map((layer,index)=>{
                    return(<div  key={'burgimg'+index} className="box">
                        <img
                            style={{float:'left'}}
                            src={window.location.origin+'/images/'+layer.img}
                        />
                        {
                            !layer.rol ? <div> <select style={{width: "170px",float:'right',height:'40px'}} onChange={(e)=>this.ChangeList(e.target.value,index)} >
                                {this.props.layers.map((layer,index)=>{
                                    return(<option key={'layer'+index}>{layer.name}</option>)
                                })}
                                </select>
                                <button className='dellayer' onClick={()=>{this.DelLayer(index)}}>X</button>
                            </div>
                                :null
                        }

                    </div>)
                })}
            </div>
            <Button className='burgergoback goback' onClick={()=>{this.props.history.goBack()}} variant="dark">goBack</Button>
        </div>)
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
export default connect(mapStateToProps,mapDispatchToProps)(Burger)