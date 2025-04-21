import { useState } from "react";

const About = () => {
  const [vegCount, setVegCount] = useState(15); // Example count of vegetarian dishes
  const [nonVegCount, setNonVegCount] = useState(20); // Example count of non-vegetarian dishes

  return (
    <section className="about bg-gradient-to-b from-gray-950 to-black text-white py-16 px-6 flex flex-col items-center">
      {/* Title Section */}
      <h2 className="text-4xl font-extrabold text-red-500 mb-6 text-shadow-lg">About Marvel Meals</h2>
      <p className="text-lg text-gray-300 max-w-3xl text-center mb-8 leading-relaxed">
        Marvel Meals brings together your love for superheroes and delicious food. Each recipe is inspired by the iconic traits of your favorite Marvel heroes, designed to make every meal a thrilling adventure. Whether you're craving a hero’s feast or something more refined, we’ve got something for every fan and foodie.
      </p>

      {/* Marvel Meals Inspiration Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-4 text-shadow-lg">The Inspiration Behind Marvel Meals</h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Inspired by the extraordinary abilities and personalities of Marvel’s superheroes, each meal embodies the essence of the character it represents. From the bold and powerful dishes that mirror Hulk's smash to the sleek and techy flavors that echo Iron Man's genius, we combine food with heroism to create an unforgettable culinary experience.
        </p>
      </div>

      {/* Dish Count Section */}
      <div className="flex justify-center items-center space-x-10 mb-12">
        <div className="text-center bg-gradient-to-r from-red-500 to-yellow-500 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-white">Vegetarian Dishes</h3>
          <p className="text-3xl font-bold text-black">{vegCount}</p>
        </div>
        <div className="text-center bg-gradient-to-r from-red-500 to-yellow-500 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-white">Non-Vegetarian Dishes</h3>
          <p className="text-3xl font-bold text-black">{nonVegCount}</p>
        </div>
      </div>

      {/* Hero Dishes Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-4 text-shadow-lg">Marvel Heroes and Their Dishes</h3>
        <p className="text-lg text-gray-300 mb-8">
          Each Marvel hero has their own unique dish, reflecting their traits and powers. From the fiery spirit of the Human Torch to the strategic mind of Captain America, explore meals inspired by these legendary figures.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
            <div className="p-6 text-center">
              <img
                src="https://i.pinimg.com/originals/42/ed/91/42ed9167aa2dce961de6d1d6bfc8a3d4.jpg"
                alt="Iron Man Dish"
                className="rounded-lg shadow-md mb-4 object-cover h-40 w-full transition duration-300 ease-in-out transform hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Tech Cuisine</h3>
              <p className="text-lg text-gray-300">A high-tech meal inspired by Iron Man’s genius. Perfect for a hero on the go!</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
            <div className="p-6 text-center">
              <img
                src="https://i.pinimg.com/originals/ef/bb/ba/efbbba6635b8dcb9edc9820eb51ec27b.jpg"
                alt="Black Panther Feast"
                className="rounded-lg shadow-md mb-4 object-cover h-40 w-full transition duration-300 ease-in-out transform hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Wakandan Feast</h3>
              <p className="text-lg text-gray-300">A royal dish fit for royalty, inspired by Black Panther’s heritage.</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
            <div className="p-6 text-center">
              <img
                src="https://cdn.vox-cdn.com/thumbor/1_pWssvD2RAmwhVoEvRWygwl47A=/0x0:1920x1080/1400x1400/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/21856372/Marvel_Cookbook_LobsterCornDog.jpg"
                alt="Lobster Corn Dog"
                className="rounded-lg shadow-md mb-4 object-cover h-40 w-full transition duration-300 ease-in-out transform hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Lobster Special</h3>
              <p className="text-lg text-gray-300">An extravagant seafood dish inspired by the luxury of Marvel's finest heroes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Hero Stats Section */}
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 text-center mb-12 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold text-red-500 mb-4">Marvel Meals Hero Stats</h3>
        <p className="text-lg text-gray-300 mb-6">Did you know? Marvel Meals is growing as we introduce new meals inspired by Marvel’s iconic characters. Check out our hero stats!</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition duration-300">
            <h4 className="text-2xl font-semibold text-yellow-400">Dishes Inspired by 10+ Heroes</h4>
            <p className="text-lg text-gray-300">From Iron Man to Thor, we've got a dish for every Marvel fan.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition duration-300">
            <h4 className="text-2xl font-semibold text-yellow-400">Over 30 Recipes</h4>
            <p className="text-lg text-gray-300">Explore a growing list of hero-inspired meals.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition duration-300">
            <h4 className="text-2xl font-semibold text-yellow-400">Global Influences</h4>
            <p className="text-lg text-gray-300">Experience Marvel cuisine from all corners of the world.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-4 text-shadow-lg">What Our Heroes Say</h3>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <p className="text-lg text-gray-300">"The Hulk Smash Burger is the most delicious thing I've ever eaten! It fuels my rage and satisfies my hunger." - Hulk</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <p className="text-lg text-gray-300">"A perfect blend of tech and taste. Iron Man approves." - Tony Stark</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <p className="text-lg text-gray-300">"A feast worthy of a king. The Wakandan dish made me feel like royalty!" - Black Panther</p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h3 className="text-3xl font-semibold text-red-500 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-300">
          At Marvel Meals, we aim to bring people together through the shared love of great food and superhero lore. Our mission is to provide a dining experience as heroic as the Marvel Universe itself, filled with flavors that reflect the unique qualities of each hero.
        </p>
      </div>
    </section>
  );
};

export default About;
