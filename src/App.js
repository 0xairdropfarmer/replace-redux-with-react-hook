import React from 'react';
import './App.css';
import MovieList from './MovieList';
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './ToggleTheme';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <MovieList />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
