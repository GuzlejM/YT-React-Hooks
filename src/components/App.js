import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  //Submits written term and sending function as prop to SearchBar.js
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(response)
  };

    render() {
        return (
          <div>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
          </div>
        );
    }
}

export default App