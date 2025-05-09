import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (darkMode) {
      html.classList.add('dark');
      body.classList.remove('bg-light', 'text-dark');
      body.classList.add('bg-dark', 'text-white');
    } else {
      html.classList.remove('dark');
      body.classList.remove('bg-dark', 'text-white');
      body.classList.add('bg-light', 'text-dark');
    }
  }, [darkMode]);

  return (
    <button
      className="btn btn-outline-secondary ms-3"
      onClick={() => setDarkMode(prev => !prev)}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
