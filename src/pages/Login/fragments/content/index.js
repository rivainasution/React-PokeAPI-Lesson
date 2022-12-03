import './styles.css';

function Content (prop) {
  
  return(
    <div className='register-wrapper'>
      <h2>{prop.data}</h2>
      <form>
        <label for="username">Username:</label><br></br>
        <input type="text" id="username" placeholder="jdoe"></input><br></br>
        <label for="password">Password:</label><br></br>
        <input type="password" id="password" placeholder="Password"></input><br></br>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Content;