import React, { useState, useEffect } from 'react';
import Card from '/src/Cards.jsx';
import axios from 'axios';
import '../App.css'; // Import the CSS file

const CardsPage = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCards = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setCards(response.data);
        } catch (err) {
          setError('Failed to fetch card data. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchCards();
    }, []);
  
    if (loading) {
      return (
        <div className="page-container">
          <p>Loading cards...</p>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="page-container">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      );
    }
  
    return (
      <div className="page-container">
        <h1 className="page-header">Cards</h1>
        <div className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default CardsPage;