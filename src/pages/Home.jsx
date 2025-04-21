import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center px-6 py-16 space-y-8">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
        alt="Marvel Logo"
        style={{ width: '800px', height: 'auto' }}
        className="animate-pulse"
      />


      <h1 className="text-4xl font-extrabold text-red-600 text-center tracking-widest">
        Welcome to Marvel Meals
      </h1>


      <p className="text-xl text-gray-300 text-center max-w-1xl">
        Fuel your hunger with dishes inspired by Earth's mightiest heroes. From Wakandan seafood to Asgardian platters, we bring the power of taste!
      </p>

      <Link to="/meals">
        <button className="bg-red-400 hover:bg-red-600 text-white px-12 py-4 rounded-xl font-bold text-1.5xl shadow-2xl transform hover:scale-105 transition duration-300 mt-4">
          🍽️ Explore Meals
        </button>
      </Link>
    </section>
  );
};

export default Home;
