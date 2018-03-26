// Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube Api key
const API_KEY = 'AIzaSyBacB_EGVqWAaAazzu_BdorBZPxNgfOWgY';


// Define component
class App extends Component {
  constructor(props) {
    super(props);
    // States
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    // Default search
    this.videoSearch('tesla');
    
  }
  // Method to search videos
  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }
  // Method to render the view
  render() {
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
    return (
      <div>
          <SearchBar onSearchTerm = { videoSearch } />
          <VideoDetail video = { this.state.selectedVideo } />
          <VideoList
            onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) }
            videos = { this.state.videos }
          />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
