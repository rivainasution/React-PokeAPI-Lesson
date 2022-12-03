import './styles.css';

function Content (props) {
  return(
    <div className='content-wrapper'>
      <h2>Pokemon List</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {props.berries.map((br, no) =>(
            <tr key={br.name}>
              <td>{no+1}</td>
              <td>{br.name}</td>
              <td>{br.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Content;