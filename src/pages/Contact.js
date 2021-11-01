import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto bg-white py-8 p-5">
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127669.04950895699!2d101.37113494037686!3d0.5139624784360096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab80690ee7b1%3A0x94dde92c3823dbe4!2sPekanbaru%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1635669993527!5m2!1sid!2sid"
          width={`100%`}
          height={450}
          className="border-none"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="mt-8">
        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="border px-3 py-2 focus:outline-none focus:border-red-700 focus:border-opacity-30"
            />

            <input
              type="email"
              placeholder="Alamat Email"
              className="border px-3 py-2 focus:outline-none focus:border-red-700 focus:border-opacity-30"
            />
          </div>

          <input
            type="text"
            placeholder="Judul"
            className="border px-3 py-2 focus:outline-none focus:border-red-700 focus:border-opacity-30"
          />

          <textarea
            cols="30"
            rows="5"
            placeholder="Pesan"
            className="border px-3 py-2 focus:outline-none focus:border-red-700 focus:border-opacity-30 resize-none"
          ></textarea>

          <button
            type="submit"
            className="py-2 px-3 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white transition-all"
          >
            Kirim Pesan
          </button>
        </form>
      </section>
    </div>
  );
}
