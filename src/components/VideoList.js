import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    // Mapping and rendering trough array fetched from YT API, passing video/onVideoSelect props
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return (
    <div className='ui relaxed divided list'>{renderedList}</div>
  );
};

export default VideoList;