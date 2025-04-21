import { useState } from "react";
import axios from "axios";
import MealCard from "./MealCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setResults(res.data.meals || []);
    } catch (err) {
      console.error("Failed to fetch meals:", err);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex gap-2 justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a Marvel-worthy meal..."
          className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/2"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
        {results.map((meal) => (
          <MealCard key={meal.idMeal} {...meal} />
        ))}
      </div>
    </div>
  );
};

export default Search;
