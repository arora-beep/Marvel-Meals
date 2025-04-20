import axios from "axios";
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalState";
import Card from "../components/Card"

const Meals = () => {
  const { meals, setMeals } = useGlobalContext();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_MEAL_API)
      .then((res) => setMeals(res.data.meals))
      .catch(console.error);
  }, []);

  return (
    <section className="items-container">
      {meals.map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
      ))}
    </section>
  );
};

export default Meals;
