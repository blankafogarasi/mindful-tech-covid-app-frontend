import React from 'react';
import './App.css';
import StatPage from './pages/StatPage/StatPage';
import Header from './components/Header';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <StatPage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
