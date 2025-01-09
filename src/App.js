import React, { useContext } from 'react';
import {ThemeProvider, ThemeContext } from './context/ThemeContext'
import './theme.css'
//import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import Home from './Home';

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function Wrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>

  )
}

export default Wrapper;
