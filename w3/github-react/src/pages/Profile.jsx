import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import githubApi from '../api/github';
import "../styles/badges.css";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchUserRepos();
  }, [username]);

  const fetchUserData = async () => {
    try {
      const response = await githubApi.get(`/users/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

  const fetchUserRepos = async () => {
    try {
      const response = await githubApi.get(`/users/${username}/repos?sort=updated&per_page=30`);
      setRepos(response.data);
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      {user && (
        <div className="text-center mb-8">
          <img src={user.avatar_url} alt={user.login} className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="text-2xl font-bold mt-4">{user.login}</h1>
          <p>Repositories: {user.public_repos}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </div>
      )}

      <h3 className="text-xl font-semibold mb-4">Repositories:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div key={repo.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-lg mb-2">{repo.name}</h3>
            <p>⭐ Stars: {repo.stargazers_count}</p>
            <p>🍴 Forks: {repo.forks_count}</p>
            
            {repo.language && (
              <span className={`badge badge-${repo.language.toLowerCase()}`}>
                {repo.language}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
