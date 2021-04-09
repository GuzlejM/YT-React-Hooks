import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideo from '../hooks/useVideo';
import useVideos from '../hooks/useVideo';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos]);
    //Submits written term and sending function as prop to SearchBar.js


    return (
      <div>
        <SearchBar onFormSubmit={search}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList 
                onVideoSelect={setSelectedVideo} 
                videos={videos} 
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default App