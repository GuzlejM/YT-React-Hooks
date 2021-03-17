import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
      return <div>Veď vydrž do piči ! Najskor sa rozhodni čo chceš pozerať, OMG *prekrutilOči</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  
  return (
    <div>
        <div className='ui embed'>
          {/* Warning fix adding attr title */}
           <iframe title="video player" src={videoSrc} />
        </div>
        <div className='ui segment'>
            <h4 className='ui header'>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
      
    </div>
  )
}

export default VideoDetail