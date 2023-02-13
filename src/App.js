import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/card';


function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchShips(){
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results);
    }
    
    fetchShips();
  }, [])

const shipsJSX = () => {
  let ships = starships.map((item) => {
    return <Card key={item.url} ship={item.name} />
  })
  return ships;
}


  return (
    <div className = "App">
      {shipsJSX()}
    </div>
  )
}

export default App;
