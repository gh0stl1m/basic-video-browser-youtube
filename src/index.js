// Libraries
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

    // Instance of youtbe
    YTSearch({ key: API_KEY, term: 'tesla' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
    
  }
  render() {
    return (
      <div>
          <SearchBar />
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
