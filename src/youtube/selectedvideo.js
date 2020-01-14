import React,{Component} from 'react';

export default class SelectedVideo extends Component{
    // constructor(props) {
    //     super(props);
    //
    //     console.log('props::', props);
    //     this.state = {
    //         video:props.video
    //     }
    // }
    //
    // componentWillReceiveProps(nextProps, nextContext) {
    //     this.setState({video: nextProps.video});
    // }

    // render() {
    //     if(!this.state.video){
    //         return <div>Loading ...</div>
    //     }
    //     const video=this.state.video || {};
    //     console.log('video::::', video.id && video.id.videoId );
    //     const url=`https://www.youtube.com/embed/${video.id&&video.id.videoId}`
    //     return(<div className="selectedvideo">
    //         <iframe src={url}></iframe>
    //     </div>)
    // }
    render() {
            if(!this.props.video){
                return <div className="videoloading"><strong>Loading ...</strong></div>
            }
            const video=this.props.video ;
            const url=`https://www.youtube.com/embed/${video.id.videoId}`;
            return(<div className="selectedvideo">
                <iframe width="560" height="315" src={url}></iframe>
                <div >
                    <h4 >{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>)
        }
}