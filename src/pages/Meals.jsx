import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 8; // Set 6-8 meals per page

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setMeals(res.data.meals))
      .catch((err) => console.error("Failed to fetch meals", err));
  }, []);

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
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white px-4 py-10 flex justify-center">
      {/* Main Content */}
      <div className="max-w-6xl w-full px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-red-500 mb-10">
          🍴 Marvel Seafood Specials
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {currentMeals.map(({ strMeal, strMealThumb, idMeal }) => (
            <Link to={`/meal/${idMeal}`} key={idMeal} className="w-full">
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition transform hover:scale-105 shadow-lg hover:shadow-xl">
                <img
                  src={strMealThumb}
                  alt={strMeal}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-bold text-yellow-400">{strMeal}</h2>
                  <p className="text-sm text-gray-300">Tap for the recipe!</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-semibold shadow-lg disabled:opacity-50 transition-all transform hover:scale-105"
          >
            ◀ Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-semibold shadow-lg disabled:opacity-50 transition-all transform hover:scale-105"
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meals;
