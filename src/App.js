import React, { useState } from "react";
import "./App.css";
import Rating from './Rating'
import ThankYou from "./ThankYou";

function App() {
  const [thankYou, setThankYou] = useState(false);
  const [rating, setRating] = useState();

  return (
    <div className="App">
      {thankYou ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating
          thankYou={thankYou}
          setThankYou={setThankYou}
          rating={rating}
          setRating={setRating}
        />
      )}
    </div>
  );
}

export default App;
