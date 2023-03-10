import React, { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from '../../Routes';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ onToggleTheme, selectedTheme }) {
  useEffect(() => {
    function handleScroll() {
      console.debug('scrollou');
    }
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <BrowserRouter>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/:id">Post</Link>
      </Nav>
      <Routes />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </BrowserRouter>
  );
}
