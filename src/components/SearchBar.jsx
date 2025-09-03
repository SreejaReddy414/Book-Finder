import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("title"); // ✅ default title

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query, searchType); // pass both query & type
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-center items-center gap-3 p-4"
    >
      {/* Dropdown for search type */}
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="p-2 border rounded-lg"
      >
        <option value="title">By Title</option>
        <option value="author">By Author</option>
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder={`Search books by ${searchType}...`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-72 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
