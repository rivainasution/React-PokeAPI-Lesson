import { useEffect, useState } from 'react';
import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';

function Home() {
  const [menu, setMenu] = useState(1);  

  return (
    <div>
      <section className='content-container'>
      <Content menu={menu}  />
      <Sidebar onClick={setMenu}/>
      </section>
    </div>
  );
}

export default Home;
