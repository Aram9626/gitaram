import React,{Component} from 'react';

export default class YoutubeList extends Component{
    state={
        def:0
    };
    render() {
        let list=this.props.videos.map((video,index)=>{
            if(index !==this.state.def){
            return(<div className="cursor" key={video.id.videoId} onClick={()=>{this.props.onChangeSelect(video);this.setState({def:index})}}>
               <img src={video.snippet.thumbnails.default.url}/>
                <h6>{video.snippet.title}</h6>
            </div>)
            }});
        return(<div className="youtubelist">
            {list}
        </div>)
    }
}
