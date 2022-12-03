import logo from '../logo.svg';
import './styles.css';

function Header(prop) {
  const menu = ["Home", "Register", "Login"];

  const navigation = () => {
    console.log(menu.map);
    return menu.map((item, idx) => {
      return <button onClick={() => prop.onClick(idx+1)} >{item}</button>
    }) 
  }
  return(
    <div>
      <header className='header-wrapper'>
        <img src={logo} alt="logo" />
        <h1 className='header-title' >Tutorial React</h1>
        <nav className='navigation'>{navigation()}</nav>
      </header>
    </div>
  );
}

export default Header;