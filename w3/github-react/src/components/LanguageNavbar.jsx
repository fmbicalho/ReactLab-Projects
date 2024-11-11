import React from 'react';

const languages = ['All', 'JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'TypeScript'];

function LanguageNavbar({ onSelectLanguage }) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => onSelectLanguage(language === 'All' ? '' : language)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
        >
          {language}
        </button>
      ))}
    </div>
  );
}

export default LanguageNavbar;
