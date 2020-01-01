import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from "./components/MyForm";
const App: React.FC = () => {
  return (
    <div className="App">
      <MyForm user="Shehzad"/>
    </div>
  );
}

export default App;
