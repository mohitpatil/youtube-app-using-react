import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBCiP1dCVLjUl6yqf9-o55iJ9A2jA_d4YI';



// Creating New Component and Producting new HTML.
class App extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            videos: []
        };

        //Using youtube api search.
        YTSearch({
            key: API_KEY,
            term: 'New React JS Video'
        }, (videos) => {
            this.setState ({ videos: videos });
           // console.log(videos);
        });
    }

    render () {
        return ( 
            <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
            </div>
        );
    }
};

//Put all components to the Dom.
ReactDOM.render(<App />, document.getElementById('app'));
