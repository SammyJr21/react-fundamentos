import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Layout from './Components/Layout';
import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme'), removeLocalStorage())
  );

  let FirstRender = useRef(true);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);
  function removeLocalStorage() {
    localStorage.removeItem('theme');
  }
  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }
  useEffect(() => {
    if (FirstRender.current) {
      FirstRender.current = false;
      return;
    }
  });
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
}
export default App;
