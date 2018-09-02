import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';




// Creating New Component and Producting new HTML.
class App extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };

        //Using youtube api search.
        YTSearch({
            key: API_KEY,
            term: 'React JS Video'
        }, (videos) => {
            this.setState ({ 
                videos: videos,
                selectedVideo : videos[0]
             });
           // console.log(videos);
        });
    }

    render () {
        return ( 
            <div>
            <SearchBar />
            <VideoDetail video = {this.state.selectedVideo}  />
            <VideoList
                onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                videos = {this.state.videos} />
            </div>
        );
    }
};

//Put all components to the Dom.
ReactDOM.render(<App />, document.getElementById('app'));
