import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';


const MovieList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return ( 
    <div className="movie-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        <li style={{ background: theme.ui }}>The Shawshank Redemption</li>
        <li style={{ background: theme.ui }}>Avengers End Game</li>
        <li style={{ background: theme.ui }}>The God Father</li>
      </ul>
    </div>
  );
}
 
export default MovieList;