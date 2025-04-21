import { useEffect, useState } from "react";
import axios from "axios";

const marvelQuotes = [
  "“I can do this all day.” – Captain America",
  "“Genius, billionaire, playboy, philanthropist.” – Iron Man",
  "“Wakanda forever!” – Black Panther",
  "“Hulk smash!” – Hulk",
  "“With great power comes great responsibility.” – Spider-Man",
  "“I choose to run toward my problems, not away from them.” – Thor",
  "“We are Groot.” – Groot",
  "“I’m always angry.” – Bruce Banner",
  "“Dormammu, I’ve come to bargain.” – Doctor Strange",
  "“I am inevitable.” – Thanos"
];

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=seafood"
        );
        setMeals(res.data.meals || []);
      } catch (error) {
        console.error("Failed to fetch meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <section className="bg-gray-900 text-white min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center text-red-500 mb-12">
        Marvel-Themed Meals
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {meals.map((meal) => {
          const randomQuote =
            marvelQuotes[Math.floor(Math.random() * marvelQuotes.length)];
          return (
            <div
              key={meal.idMeal}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-red-600 transition duration-300 border border-red-700"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-300 mb-2">
                  {meal.strMeal}
                </h3>
                <p className="text-sm italic text-gray-400 mb-2">{randomQuote}</p>
                <a
                  href={meal.strSource || `https://www.themealdb.com/meal/${meal.idMeal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold transition"
                >
                  View Recipe
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Meals;
