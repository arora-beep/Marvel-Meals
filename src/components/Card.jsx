import React from "react";

const Card = ({ meal }) => {
    return (
      <div className="card">
        Hello
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="content">
          <p>{meal.strMeal}</p>
          <p>ID: #{meal.idMeal}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  