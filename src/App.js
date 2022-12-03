import { useState } from 'react';
import './App.css';
import Footers from './components/Footers';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Register />}
    else if(menu === 3) {return <Login />}
  }

  return (
    <div className="App">
      <Header onClick={setMenu} />
      {content()}
      <Footers />
    </div>
  );
}

export default App;
