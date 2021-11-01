import BookCard from "../components/BookCard";
import { books } from "../data/books";

export default function ListBook() {
    return (
        <div className="container mx-auto bg-white py-8 p-5">
            <h2 className="font-medium text-2xl mb-5">Semua Buku</h2>

            <section>
                <div className="grid grid-cols-6 gap-5">
                    { books.map(book => (
                        <BookCard book={book} />
                    )) }
                </div>
            </section>
        </div>
    )
}
