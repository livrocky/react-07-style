import './App.css';
import Header from './components/header/Header';

function App() {
  const isLarge = false;

  const btnStyles = {
    background: 'blue',
    fontSize: isLarge ? '25px' : '10px',
  };
  return (
    <div className='App'>
      <Header />
      <h1>Hello again world</h1>
      <buttons tyle={btnStyles}> Click me </buttons>
    </div>
  );
}

export default App;
