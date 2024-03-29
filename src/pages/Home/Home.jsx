import React, { useState, useEffect } from 'react';
import seasideCliffs from '../../assets/images/seaside-cliffs.png';
import Card from '../../components/Card/Card';
import './home.css';
import accomodations from '../../assets/logements.json';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';

function Home() {
    
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(accomodations)
  }, [])

  console.log(cards);
  return (
    <main>
      
      <Banner src={seasideCliffs} alt="Bord de mer" content="Chez vous, partout et ailleurs" />

      <ul className='allcards'> 
      {accomodations.map((card) => (
        <li key={card.id}>
          <Link to={`/fullCard/${card.id}`}>
            <Card src={card.cover} alt={card.cover} content={card.title} />
          </Link>
        </li>
  ))}
</ul>
    </main>
  );
};

export default Home;
