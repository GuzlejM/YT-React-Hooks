import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state= { videos: [], selectedVideo: null };
  
  //Submits written term and sending function as prop to SearchBar.js
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };
  // the 'video' is video object we fetch from the youtube API
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
    render() {
        return (
          <div>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className='ui grid'>
              <div className='ui row'>
                <div className='eleven wide column'>
                  <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className='five wide column'>
                  <VideoList 
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos} 
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default App