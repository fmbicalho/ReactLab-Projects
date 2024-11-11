import React, { useEffect, useState } from 'react';
import githubApi from '../api/github';
import CardsList from '../components/CardsList';
import LanguageNavbar from '../components/LanguageNavbar';

function Home() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    fetchTopUsers(selectedLanguage);
  }, [selectedLanguage]);

  const fetchTopUsers = async (language) => {
    try {
      let url = `/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=30`;
      if (language) {
        url = `/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=30`;
      }
      
      const response = await githubApi.get(url);
      const sortedUsers = response.data.items.map((repo) => ({
        login: repo.owner.login,
        avatar_url: repo.owner.avatar_url,
        stars: repo.stargazers_count,
        repos: repo.owner.public_repos,
        followers: repo.owner.followers_url.length,
      }));
      setUsers(sortedUsers);
      setFilteredUsers(sortedUsers);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleLanguageFilter = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center text-3xl font-bold mb-6">Top GitHub Users</h2>
      <LanguageNavbar onSelectLanguage={handleLanguageFilter} />
      <CardsList users={filteredUsers} />
    </div>
  );
}

export default Home;
