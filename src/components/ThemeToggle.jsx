// ThemeToggle.jsx
import React from 'react';

const ThemeToggle = ({ isLightTheme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isLightTheme ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;