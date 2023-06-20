

import './App.css';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import data from './components/Card/data';

function App() {

 const card= data.map((item) =>{
  return <Card
  key={item.id}
  {...item}
  ></Card>
 })

  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <section className='card-list'>
      {card} 
      </section>
     
    </div>
  );
}

export default App;
