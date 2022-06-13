import './App.css';
import Header from './components/header/Header';
import MyButton from './components/MyButton/MyButton';

function App() {
  const isLarge = true;

  const btnStyles = {
    background: 'blue',
    fontSize: isLarge ? '25px' : '10px',
  };

  return (
    <div className='App'>
      <Header />
      <h1>Heloo again world</h1>
      <button style={btnStyles}>Click me</button>
      <button>Click me no style</button>
      <MyButton />
    </div>
  );
}

export default App;
