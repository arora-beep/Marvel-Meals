// src/pages/Meals.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 3;

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setMeals(res.data.meals))
      .catch((err) => console.error("Failed to fetch meals", err));
  }, []);

  // Pagination Logic
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);
  const totalPages = Math.ceil(meals.length / mealsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white py-10 px-6">
      <h1 className="text-4xl text-center text-red-600 font-extrabold mb-8">
        Explore Marvelous Meals 🔥
      </h1>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {currentMeals.map(({ strMeal, strMealThumb, idMeal }) => (
          <Link to={`/meal/${idMeal}`} key={idMeal}>
            <div className="bg-gray-800 rounded-lg flex items-center gap-4 p-4 shadow-lg hover:bg-gray-700 transition">
              <img
                src={strMealThumb}
                alt={strMeal}
                className="w-32 h-32 object-cover rounded-md border-2 border-red-500"
              />
              <div>
                <h2 className="text-xl font-bold text-yellow-400">{strMeal}</h2>
                <p className="text-sm text-gray-300">
                  Tap to reveal superhero-level recipes!
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 gap-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md disabled:opacity-50"
        >
          ◀ Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md disabled:opacity-50"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default Meals;
