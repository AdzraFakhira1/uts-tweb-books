import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div className="py-8 bg-white container mx-auto">
                <Link to="/books"><h1 className="uppercase text-center font-bold text-3xl">Books</h1></Link>
                <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, natus!</p>
            </div>
            <div>
                <ul className="container mx-auto flex gap-8 justify-center bg-red-700 py-5">
                    <li className="text-white font-medium hover:opacity-70"><Link to="/books">Beranda</Link></li>
                    <li className="text-white font-medium hover:opacity-70"><Link to="/books/all-book">Daftar Buku</Link></li>
                    <li className="text-white font-medium hover:opacity-70"><Link to="/books/about-us">Tentang Kami</Link></li>
                    <li className="text-white font-medium hover:opacity-70"><Link to="/books/privacy-policy">Kebijakan Privasi</Link></li>
                    <li className="text-white font-medium hover:opacity-70"><Link to="/books/contact">Kontak Kami</Link></li>
                </ul>
            </div>
        </nav>
    )
}
