import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  // usestate to hold cards state
  const [cards, setCards] = useState([]);

  // useEffect to fetch the data
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r)=>r.json())
    .then((data) => setCards(data))
  }, [])

  const listcards = cards.map((card) => {
    return <ListingCard card={card} key={card.id}/>
  })

  return (
    <main>
      <ul className="cards">
        {listcards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
