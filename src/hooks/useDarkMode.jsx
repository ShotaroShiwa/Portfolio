import { useState, useEffect } from "react";


const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark-theme');
    setIsDarkMode(currentTheme);

    const handleThemeChange = () => {
      const currentTheme = document.body.classList.contains('dark-theme');
      setIsDarkMode(currentTheme);
    };

    document.addEventListener('themeChange', handleThemeChange);

    return () => {
      document.removeEventListener('themeChange', handleThemeChange);
    }
  }, []);
  return isDarkMode;
}

export default useDarkMode
