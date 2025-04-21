
import { Link } from "react-router-dom";

const MealCard = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <Link to={`/meal/${idMeal}`} className="w-full">
      <div className="relative group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-red-600/40">
       
        <img
          src={strMealThumb}
          alt={strMeal}
          className="h-44 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="p-4 text-center">
          <h2 className="text-xl font-extrabold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow">
            {strMeal}
          </h2>
          <p className="text-sm text-gray-300 italic mt-1">
            Tap to reveal the secrets 🕵️‍♂️
          </p>
        </div>

        
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500 transition-all duration-300 pointer-events-none" />
      </div>
    </Link>
  );
};

export default MealCard;
