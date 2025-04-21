import axios from "axios";
import { useEffect, useState } from "react";

const marvelQuotes = [
  "With great flavor comes great responsibility.",
  "Assembled for your appetite!",
  "Smash that hunger!",
  "I can do this all meal!",
  "Wakanda Flavors Forever!",
  "Suit up for flavor!"
];

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setMeals(res.data.meals))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <h2 className="text-4xl text-center font-bold text-red-500 mb-8">
        🍤 Marvel-Themed Seafood Dishes
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals.map((meal, idx) => (
          <div
            key={meal.idMeal}
            className="bg-gray-800 rounded-lg shadow-lg hover:shadow-red-500 transition transform hover:scale-105 overflow-hidden"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-yellow-400">
                {meal.strMeal}
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                {marvelQuotes[idx % marvelQuotes.length]}
              </p>
              <p className="mt-2 text-xs text-gray-500">#ID: {meal.idMeal}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meals;
