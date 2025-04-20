const Home = () => (
    <section className="home bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
        alt="Marvel Logo"
        className="w-40 mb-6 animate-pulse"
      />
      <h2 className="text-4xl font-extrabold mb-4 text-red-500">
        Welcome to Marvel Meals
      </h2>
      <p className="text-lg text-center max-w-lg">
        Power your taste buds with <span className="text-yellow-300">Avenger-grade</span> seafood
        recipes! Enjoy dishes inspired by your favorite superheroes!
      </p>
      <button className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition">
        Explore Recipes
      </button>
    </section>
  );
  
  export default Home;
  