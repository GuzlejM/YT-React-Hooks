import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [ term, setTerm ] = useState('');
  
  const onSubmit = (event) => {
  event.preventDefault();

  onFormSubmit(term)
  }

  return (
    <div className='search-bar ui segment'>
      <h1>MyTube :D </h1>
      <form className='ui form' onSubmit={onSubmit}>
          <div className='field'>
              <label>Zadaj názov</label>
              <input 
                type='text' 
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder='Vyhľadaj video'
              />
          </div>
      </form>
    </div>
  );

};

export default SearchBar