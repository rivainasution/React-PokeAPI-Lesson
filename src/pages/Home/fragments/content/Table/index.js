import { useEffect, useState } from "react";

function Table (prop){
    const [data, setData] = useState([]);
    const endpoint = prop.api;

    useEffect(()=>{
        getData();
    }, []);

    const getData =  async() => {
        const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);
        const data = await res.json();
        const result = data.results;
        setData(result);
    };

    return(
        <div>
            <h2>{endpoint} list</h2>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Url</th>
                </tr>
                </thead>
                <tbody>
                {data.map((br, no) =>(
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
export default Table;