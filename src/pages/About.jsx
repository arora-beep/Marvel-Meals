import { useState } from "react";

const About = () => {
  const [vegCount] = useState(15);
  const [nonVegCount] = useState(20);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-20">
        
  
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-red-500">About Marvel Meals</h1>
          <br></br>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to <span className="text-yellow-400 font-semibold">Marvel Meals</span> — where epic flavors meet heroic inspiration.
            Whether you're as strong as Hulk or as sharp as Iron Man, our dishes bring your favorite heroes to your plate.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <div className="bg-green-500 text-black px-10 py-8 rounded-2xl shadow-xl w-64 text-center">
            <h2 className="text-2xl font-bold">Vegetarian Dishes</h2>
            <p className="text-5xl font-extrabold mt-2">{vegCount}</p>
          </div>
          <div className="bg-red-500 text-black px-10 py-8 rounded-2xl shadow-xl w-60 text-center">
            <h2 className="text-2xl font-bold">Non-Vegetarian Dishes</h2>
            <p className="text-4xl font-extrabold mt-2">{nonVegCount}</p>
          </div>
        </div>


        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl font-semibold text-yellow-400">Our Core Values</h2>
          <ul className="text-lg text-gray-300 space-y-3">
            <li>🍴 Quality ingredients inspired by powerful heroes</li>
            <li>❤️ Passion for creativity and storytelling in every meal</li>
            <li>🌍 Cultural diversity celebrated through recipes</li>
            <li>🛡️ Commitment to healthy, balanced options for all</li>
          </ul>
        </div>

   
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl font-semibold text-yellow-400">What Makes Us Special?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Each dish is crafted with flavors that mirror the essence of Marvel heroes.
            From Thor’s hearty hammer meals to Spidey’s quick bites — it’s more than food, it’s a superpowered experience.
          </p>
        </div>

   
        <div className="space-y-10 w-full">
          <h2 className="text-4xl font-semibold text-yellow-400">What Our Heroes Say</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-72">
              <p className="text-lg text-gray-300">"The Smash Burger is incredible! It’s like unleashing my strength in a bite!"</p>
              <p className="text-yellow-400 font-semibold mt-2">- Hulk</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-72">
              <p className="text-lg text-gray-300">"High-tech taste meets perfection. I’m impressed."</p>
              <p className="text-yellow-400 font-semibold mt-2">- Tony Stark</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-72">
              <p className="text-lg text-gray-300">"Elegant and powerful – just like Wakanda."</p>
              <p className="text-yellow-400 font-semibold mt-2">- Black Panther</p>
            </div>
          </div>
        </div>


        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl font-semibold text-yellow-400">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Marvel Meals strives to bring joy and taste to every fan’s plate. We celebrate our love for superheroes
            through unique recipes, fun experiences, and unforgettable flavors. Join us in our flavorful journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
