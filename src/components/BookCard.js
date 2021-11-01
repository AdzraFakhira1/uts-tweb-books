import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="border rounded overflow-auto hover:shadow transition-shadow">
      <img src={process.env.PUBLIC_URL + '/img/' + book.image} alt={book.title} />
      <div className="flex flex-col px-2 py-3">
        <Link to={`/books/item/${book.id}`}>
          <h4 className="font-semibold text-lg mb-2 hover:text-red-700 transition-colors">
            {book.title}
          </h4>
        </Link>
        <span className="text-xs text-gray-600">{book.author}</span>
      </div>
    </div>
  );
}
