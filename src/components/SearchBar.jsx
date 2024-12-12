// SearchBar.jsx
import React from 'react';

const SearchBar = ({ queryInput, onInputChange, onSubmitQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={queryInput}
        placeholder="Ask me anything..."
        onInput={onInputChange}
      />
      <button onClick={onSubmitQuery}>Ask Bhaskhar</button>
    </div>
  );
};

export default SearchBar;