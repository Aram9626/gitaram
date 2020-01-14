import React,{Component} from 'react';

export default class Features extends Component{
    render(){
        return(<div>
            <ul style={{listStyleType:'none',float:'left',marginLeft: '180px',marginTop: '40px'}}>
            <li style={{fontSize:'25px',color:'orange'}}>Features</li>
            <li>Home</li>
            <li>Subject</li>
            <li>Courses</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>)
    }
}