// context/ThemeContext.js
'use client';

import { createContext, useState, useEffect } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null); // Initially set theme to null to avoid mismatch during SSR

  // On component mount, check if the user has a preferred theme in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme); // Set the theme after the component has mounted (client-side only)
  }, []);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Store the new theme in localStorage
  };

  // Apply the theme class to the body on initial load and theme change
  useEffect(() => {
    if (theme) {
      document.body.className = theme;
    }
  }, [theme]);

  // If theme is null (during SSR or before client-side render), don't render anything
  if (!theme) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
