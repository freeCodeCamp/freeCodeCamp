import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle: React.FC = () => {
  // Check localStorage for theme preference
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <label className='switch'>
      <input
        type='checkbox'
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        aria-label='Toggle dark mode'
      />
      <span className='slider'></span>
    </label>
  );
};

export default DarkModeToggle;
