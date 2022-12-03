import './styles.css';

function Sidebar() {
  return(
    <div className='sidebar-wrapper'>
      <h2>Filter By:</h2>
      <button>Contest</button>
      <button>Encounter</button>
      <button>Evolution</button>
      <button>Games</button>
      <button>Items</button>
      <button>Locations</button>
      <button>Machines</button>
      <button>Moves</button>
      <button>Utility</button>
    </div>
  );
}

export default Sidebar;