import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input) {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search by username..."
        className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
