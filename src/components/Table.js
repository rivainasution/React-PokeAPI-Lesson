import { useEffect, useState } from "react";

function Table (prop){
    const [data, setData] = useState([]);
    let endpoint = prop.api;
    const x = `https://pokeapi.co/api/v2/${endpoint}`;

    useEffect(()=>{
        getData();
    }, [data]);

    const getData =  async() => {
        const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);
        const data = await res.json();
        const result = data.results;
        console.log(result);
        setData(result);
    };

    return(
        <div>
            <h2>{endpoint} list</h2>
            <h5>{x}</h5>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Url</th>
                </tr>
                </thead>
                <tbody>
                {data.map((call, no) =>(
                    <tr key={call.name}>
                    <td>{no+1}</td>
                    <td>{call.name}</td>
                    <td>{call.url}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default Table;