import React, { useState } from 'react';
import githubApi from '../api/github';
import UserCard from '../components/UserCard';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await githubApi.get(`/users/${username}`);
      setUser(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('User exceeded the max searchs.');
      setUser(null);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center text-3xl font-bold mb-6">Search User</h2>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Write user name..."
          className="border rounded-lg p-2 w-64"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {user && (
        <UserCard
          user={user}
          clickable
        />
      )}
    </div>
  );
}

export default Search;
