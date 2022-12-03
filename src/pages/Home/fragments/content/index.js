import './styles.css';
import Table from './Table';

function Content (prop) {
  const content = () => {
    if (prop.menu === 1) {
      return (
        <Table api="berry" /> 
      );
    }
    else if(prop.menu === 2) {
      return (
        <Table api="contest-type" /> 
      );
    }
    else if(prop.menu === 3) {
      return (
        <Table api="encounter-method" /> 
      );
    }
    else if(prop.menu === 4) {
      return (
        <Table api="evolution-chain" /> 
      );
    }
    else if(prop.menu === 5) {
      return (
        <Table api="generation" /> 
      );
    }
    else if(prop.menu === 6) {
      return (
        <Table api="item" /> 
      );
    }
    else if(prop.menu === 7) {
      return (
        <Table api="location" /> 
      );
    }
    else if(prop.menu === 8) {
      return (
        <Table api="machine" /> 
      );
    }
    else if(prop.menu === 9) {
      return (
        <Table api="move" /> 
      );
    }
    else if(prop.menu === 10) {
      return (
        <Table api="ability" /> 
      );
    }
  }
  return(
    <div className='content-wrapper'>
      {content()}
    </div>
  );
}

export default Content;