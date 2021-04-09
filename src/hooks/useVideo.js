import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    //const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit(defaultSearchTerm)
      }, []);

      const onTermSubmit = async term => {
        const response = await youtube.get('/search', {
          params: {
            q: term  
          }
        });
  
        setVideos(response.data.items)
  
      };

      return [videos, onTermSubmit]
};

export default useVideos;