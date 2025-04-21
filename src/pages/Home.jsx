import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
        alt="Marvel Logo"
        className="w-44 mb-6 animate-pulse"
      />
      <h1 className="text-5xl font-extrabold text-red-600 text-center mb-4 tracking-widest">
        Welcome to Marvel Meals
      </h1>
      <p className="text-xl text-gray-300 text-center max-w-2xl mb-6">
        Fuel your hunger with dishes inspired by Earth's mightiest heroes. From Wakandan seafood to Asgardian platters, we bring the power of taste!
      </p>
      <Link to="/meals">
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition duration-300">
          🍽️ Explore Meals
        </button>
      </Link>
    </section>
  );
};

export default Home;
