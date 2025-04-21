import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        if (res.data.meals) {
          setMeal(res.data.meals[0]);
        } else {
          setMeal(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching meal:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl animate-pulse">
        Loading recipe...
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500 text-2xl">
        Meal not found.
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
        {/* Back Button */}
        <div className="p-4 bg-gray-900 text-center">
          <Link
            to="/meals"
            className="text-red-400 hover:text-red-300 text-lg font-semibold transition"
          >
            ← Back to Meals
          </Link>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 py-6 px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white tracking-wide mb-1">
            🍽️ {meal.strMeal}
          </h2>
          <p className="text-sm text-gray-200 italic">
            From the culinary archives of {meal.strArea}
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 flex flex-col lg:flex-row gap-10 justify-center items-center">
          {/* Meal Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-xl shadow-lg w-full max-w-md object-cover border-2 border-red-500"
            />
          </div>

          {/* Meal Details */}
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left mb-4 space-y-2">
              <p>
                <span className="text-yellow-400 font-bold">Category:</span> {meal.strCategory}
              </p>
              <p>
                <span className="text-yellow-400 font-bold">Area:</span> {meal.strArea}
              </p>
            </div>

            <h3 className="text-red-400 font-bold text-lg mb-2 underline text-center lg:text-left">
              Ingredients:
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 max-h-60 overflow-y-auto pr-2 text-center lg:text-left">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="px-6 pb-10">
          <h3 className="text-yellow-300 text-2xl font-bold mb-3 text-center">📜 Instructions</h3>
          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line bg-gray-900 p-4 rounded-xl border border-gray-700 text-justify">
            {meal.strInstructions}
          </p>

          {/* YouTube Tutorial */}
          {meal.strYoutube && (
            <div className="mt-6 text-center">
              <h3 className="text-blue-400 text-xl font-bold mb-2">🎥 Watch Tutorial</h3>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline"
              >
                {meal.strYoutube}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
