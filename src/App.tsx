import React from 'react';
// import logo from './logo.svg';
// import TextContent from './textContent';
import './App.css';
import { CounterComponent } from './CounterComponent';
import { Input } from './Input';
import assetsImage from './Assets/img.jpeg';

function App() {
  const handler = () => {
    console.log('Кнопка была нажата');
  };

  return (
    <div className="App">
      <CounterComponent title={'Orange'} count={9} />
      <CounterComponent title={'Apple'} count={4} />
      <CounterComponent title={'Lemon'} count={3} />

      <button onClick={handler}>PUSH ME</button>
      <Input />
      <img src={assetsImage} alt="img" />
      <img src={'/img.jpeg'} alt="img" />
      <div className="example">Hello World </div>
    </div>
  );
}

export default App;
