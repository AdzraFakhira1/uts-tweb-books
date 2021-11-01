import { useParams } from "react-router";
import { books } from "../data/books";

export default function BookDetail() {
  const { id } = useParams();

  const book = books.find((item) => item.id == id);

  return (
    <div className="container mx-auto py-8 p-5">
      <div className="flex gap-5 items-center">
        <div className="h-full w-auto">
          <img
            src={process.env.PUBLIC_URL + "/img/" + book.image}
            alt={book.name}
          />
        </div>

        <div className="w-full rounded bg-white">
          <div className="p-8">
            <h2 className="font-semibold text-3xl">{book.title}</h2>
            <p className="antialiased mt-8">{book.description}</p>

            <div className="mt-10">
                <h4 className="font-bold border-b-4 border-gray-200 inline-block mb-5">Informasi Tambahan</h4>

                <table className="w-full">
                    <tbody className="leading-relaxed">
                        <tr className="border-b flex justify-between py-2">
                            <td className="font-semibold">Kategori</td>
                            <td className="text-right">{ book.categories }</td>
                        </tr>
                        <tr className="border-b flex justify-between py-2">
                            <td className="font-semibold">Penulis</td>
                            <td className="text-right">{ book.author }</td>
                        </tr>
                        <tr className="border-b flex justify-between py-2">
                            <td className="font-semibold">Penerbit</td>
                            <td className="text-right">{ book.publisher }</td>
                        </tr>
                        <tr className="border-b flex justify-between py-2">
                            <td className="font-semibold">Tahun Terbit</td>
                            <td className="text-right">{ book.publication_year }</td>
                        </tr>
                        <tr className="border-b flex justify-between py-2">
                            <td className="font-semibold">Jumlah Halaman</td>
                            <td className="text-right">{ book.page }</td>
                        </tr>
                        <tr className="border-b flex justify-between py-2">
                            <td className="font-semibold">Dimensi</td>
                            <td className="text-right">{ book.dimention }</td>
                        </tr>
                        <tr className="border-b flex justify-between py-2">
                            <td className="font-semibold">ISBN</td>
                            <td className="text-right">{ book.isbn }</td>
                        </tr>
                        <tr className="flex justify-between py-2">
                            <td className="font-semibold">Jenis Sampul</td>
                            <td className="text-right">{ book.cover }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
