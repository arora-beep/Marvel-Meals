import Search from "../components/Search";

const SearchPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl text-center font-bold text-red-600 mb-6">
        Find Your Marvel Meal
      </h2>
      <Search />
    </section>
  );
};

export default SearchPage;
