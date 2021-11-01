import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookCard from "../components/BookCard";
import { books } from "../data/books";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";

export const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    fade: true,
  };

  let getHomeBooks = (books) => {
    let items = [];

    for (let i = 0; i < 12; i++) {
      items.push(books[i]);
    }

    return items;
  };

  return (
    <div className="container mx-auto bg-white">
      <Slider {...settings}>
        <div>
          <img src={process.env.PUBLIC_URL + '/img/banner-1.jpg'} alt="Banner 1" width={`100%`} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/img/banner-2.jpg'} alt="Banner 2" width={`100%`} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/img/banner-3.jpg'} alt="Banner 3" width={`100%`} />
        </div>
      </Slider>

      <section className="py-8 p-5">
        <h2 className="font-semibold text-2xl mb-5">Buku Populer Minggu Ini</h2>
        <div className="grid grid-cols-6 gap-5">
          {books
            .filter((book) => book.popular === true)
            .map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
        </div>
      </section>

      <section className="py-8 p-5">
        <h2 className="font-semibold text-2xl mb-5">Kategori Pilihan</h2>
        <div className="grid grid-cols-5 gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative flex items-center justify-center h-full"
            >
              <img
                src={process.env.PUBLIC_URL + '/img/' + category.image}
                alt={category.name}
              />
              <div className="absolute bg-black hover:bg-gray-400 hover:bg-opacity-80 h-full bg-opacity-50 inset-x-0 text-center font-semibold text-white hover:text-red-700 transition-colors flex items-center justify-center cursor-pointer">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 p-5">
        <h2 className="font-semibold text-2xl mb-5">Buku Lainnya</h2>
        <div className="grid grid-cols-6 gap-5">
          {getHomeBooks(books).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <div className="py-10 flex items-center justify-center">
        <Link
          to="/books/all-book"
          className="border border-red-700 w-6/12 text-center py-2 font-medium text-red-700 hover:text-white hover:bg-red-700 transition-all"
        >
          Lihat Semua Buku
        </Link>
      </div>
    </div>
  );
};
