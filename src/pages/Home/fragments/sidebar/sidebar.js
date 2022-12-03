import './styles.css';

function Sidebar(prop) {
  const sideBarMenu = [
    "Berry",
    "Contest", 
    "Encounter", 
    "Evolution", 
    "Games",
    "Items",
    "Locations",
    "Machines",
    "Moves",
    "Ability"
  ];

  const findBy = () => {
    return sideBarMenu.map((item, idx) => {
      return <button onClick={() => prop.onClick(idx+1)} >{item}</button>
    }) 
  }
  return(
    <div className='sidebar-wrapper'>
      <h2>Find By:</h2>
      <nav className='find'>{findBy()}</nav>
    </div>
  );
}

export default Sidebar;