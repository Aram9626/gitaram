import React,{Component} from 'react';

export default class Change extends Component{
    render() {
        const cont=this.props.control;
        return(<div>
                <input type='text'  onChange={(e)=>this.props.onChange(e)}/>
                <br/>
                {(cont.touched && !cont.valid)? <span style={{color:'red'}} >{cont.errorMessage}</span> : null}
                </div>
        )
    }
}