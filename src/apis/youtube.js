import axios from 'axios';

const KEY = 'AIzaSyB9SS85VwQbh9j7u-fUpWe3K8-3m0d6GX0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
  },
});