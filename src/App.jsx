import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookModal from "./components/BookModal";

const getCoverUrl = (book) => {
  if (book.isbn && book.isbn.length > 0) {
    return `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;
  } else if (book.cover_edition_key) {
    return `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`;
  } else if (book.cover_i) {
    return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  } else {
    return "https://placehold.co/150x200?text=No+Cover";
  }
};

export default function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false); // ✅ new state
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async (query, type = "title") => {
    setLoading(true);
    setSearched(true);
    try {
      let url = "";
      if (type === "author") {
        url = `https://openlibrary.org/search.json?author=${query}`;
      } else if (type === "isbn") {
        url = `https://openlibrary.org/search.json?isbn=${query}`;
      } else {
        url = `https://openlibrary.org/search.json?title=${query}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setResults(data.docs.slice(0, 20));
    } catch (err) {
      console.error("Error fetching books:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-600 pt-6">
        Book Finder 📚
      </h1>

      <SearchBar onSearch={fetchBooks} />

      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && searched && results.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No books found 📭</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {results.map((book, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedBook(book)}
            className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
          >
            <img
              src={getCoverUrl(book)}
              alt={book.title}
              className="w-32 h-48 object-contain rounded mb-3 bg-gray-200"
            />
            <h2 className="font-semibold text-lg text-center">{book.title}</h2>
            <p className="text-gray-600 text-sm text-center">
              {book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author"}
            </p>
            <p className="text-sm text-gray-500">
              First published: {book.first_publish_year || "N/A"}
            </p>
          </div>
        ))}
      </div>
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}
