import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${user.login}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md rounded-md p-4 text-center cursor-pointer hover:shadow-lg transition-shadow"
    >
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{user.login}</h2>
      <p className="text-gray-700">Repos: {user.public_repos}</p>
      <p className="text-gray-700">Stars: {user.stars || 0}</p>
      <p className="text-gray-700">Followers: {user.followers}</p>
    </div>
  );
}

export default UserCard;
