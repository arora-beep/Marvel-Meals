import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
        alt="Marvel Logo"
        className="w-48 mb-8 drop-shadow-lg animate-bounce"
      />
      <h2 className="text-5xl font-extrabold mb-4 text-red-500 text-center drop-shadow-md tracking-wide">
        Welcome to Marvel Meals
      </h2>
      <p className="text-xl text-center max-w-xl text-gray-300 leading-relaxed mb-6">
        Unleash your hunger with <span className="text-yellow-400 font-semibold">super-powered seafood</span> inspired by Earth’s mightiest heroes. Fuel your inner Avenger, one meal at a time!
      </p>
      <button
        onClick={() => navigate("/meals")}
        className="mt-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        🍴 Explore Meals
      </button>
    </section>
  );
};

export default Home;
