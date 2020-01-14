import React,{Component} from 'react';

export default class Sites extends Component{
    render(){
        return(<div className='divbot'>
        <img src={window.location.origin+'/'+'images/122.jpg'} className='img' />
        <p>Webiner  2018  Privace  Terms  Cookie Policy  Sitemap</p>
          <i style={{left:'750px'}} className="fab fa-facebook-f"></i>
          <i style={{left:'800px'}} className="fab fa-twitter"></i>
          <i style={{left:'850px'}} className="fab fa-google-plus-g"></i>
          <i style={{left:'920px'}} className="fab fa-linkedin-in"></i>
        </div>)
    }
}