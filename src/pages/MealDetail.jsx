import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the meal details based on the `id` from URL params
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        if (res.data.meals) {
          setMeal(res.data.meals[0]);
        } else {
          // Handle case where no meal is returned (could be a wrong id)
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
    return <p className="text-center text-white py-20">Loading recipe...</p>;
  }

  if (!meal) {
    return <p className="text-center text-red-500 py-20">Meal not found.</p>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white p-6">
      <Link
        to="/meals"
        className="text-red-400 hover:underline block mb-4 font-semibold"
      >
        ← Back to Meals
      </Link>

      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden p-6">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">{meal.strMeal}</h2>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full md:w-1/2 rounded-md shadow-md object-cover"
          />
          <div>
            <p className="mb-3">
              <span className="font-bold text-red-400">Category:</span>{" "}
              {meal.strCategory}
            </p>
            <p className="mb-3">
              <span className="font-bold text-red-400">Area:</span>{" "}
              {meal.strArea}
            </p>
            <p className="font-bold text-yellow-200 mb-2">Ingredients:</p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-red-500 mb-2">Instructions</h3>
          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>

        {meal.strYoutube && (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-red-500 mb-2">Watch Tutorial</h3>
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              {meal.strYoutube}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealDetails;
