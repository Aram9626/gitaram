import React,{Component} from 'react';
import searchYoutube from 'youtube-api-v3-search';
import SelectedVideo from "./selectedvideo";
import YoutubeList from "./list";
import Button from "react-bootstrap/Button";

 export default class Youtube extends Component{
    state={
        videos:[],
        q:'',
        selected:null
    };
     videoSearch= async ()=>{
         let data = await searchYoutube('AIzaSyAwRpEdsM62hBys5lKAokywqe4k2Tc4wnI',{q:this.state.q});
         this.setState({videos:data.items,selected:data.items[0],q:''})
     };
    render() {
        return(<div className="myyoutube">
            <br/>
            <br/>
            <input className="mb-3" type="text" value={this.state.q} onChange={(e)=>this.setState({q:e.target.value})}/>
            <button aria-label='search' className="mb-3" onClick={this.videoSearch}><i className="fa fa-search"></i></button>
            <SelectedVideo video={this.state.selected}/>
            <YoutubeList videos={this.state.videos} onChangeSelect={(selected)=>this.setState({selected})}/>
            <Button className="videoback goback" onClick={()=>{this.props.history.goBack()}} variant="dark">goBack</Button>
        </div>)
    }
}
