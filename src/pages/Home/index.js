import { useEffect, useState } from 'react';
import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';

function Home() {
  const [berries, setBerries] = useState([]);

  useEffect(()=>{
    getBerries();
  }, []);

  const getBerries =  async() => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/berry/"
    );
    const data = await res.json();
    const berry = data.results;
    setBerries(berry);
  };

  return (
    <div>
      <section className='content-container'>
        <Content berries={berries} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Home;
