const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          ✖
        </button>

        {/* Cover */}
        <img
          src={
            book.isbn && book.isbn.length > 0
              ? `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`
              : book.cover_edition_key
              ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`
              : book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : "https://via.placeholder.com/200x300?text=No+Cover"
          }
          alt={book.title}
          className="w-40 h-60 object-cover rounded mx-auto"
        />

        {/* Details */}
        <h2 className="mt-4 text-2xl font-bold text-center">{book.title}</h2>
        <p className="text-center text-gray-700">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <p><strong>First Published:</strong> {book.first_publish_year || "N/A"}</p>
          <p><strong>Publisher:</strong> {book.publisher ? book.publisher[0] : "N/A"}</p>
          <p><strong>Edition Count:</strong> {book.edition_count || "N/A"}</p>
          <p><strong>Subjects:</strong> {book.subject ? book.subject.slice(0, 5).join(", ") : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
