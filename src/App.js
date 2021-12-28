import React from 'react';
import './App.css';
import StatPage from './pages/StatPage/StatPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <StatPage/>
    </div>
  );
}

export default App;
