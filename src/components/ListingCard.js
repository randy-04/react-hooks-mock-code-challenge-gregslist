import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

function ListingCard({ card }) {
  // desctructuring prop
  const {image, description, location} = card;

  const [fav, setFav] = useState(false);

  const handleFav = () => {
    setFav((star) => {
      // console.log("Fav?", star);
      return !star;

    })
  }
 
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={handleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>

    {/* <Card className="bg-dark text-white">
          <Card.Img className="image" src={image} alt={description} />
          <Card.ImgOverlay>
            <Card.Title><span className="price">$0</span></Card.Title>
            <Card.Text>
            <div className="details">
              {true ? (
                <button className="emoji-button favorite active">★</button>
              ) : (
                <button className="emoji-button favorite">☆</button>
              )}
              <strong>{description}</strong>
              <span> · {location}</span>
              
            </div>
            </Card.Text>
            <Card.Text><button className="emoji-button delete">🗑</button></Card.Text>
          </Card.ImgOverlay>
        </Card> */}
    </li>
  );
}

export default ListingCard;
