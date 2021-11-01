import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="container mx-auto bg-red-700 text-white py-3 text-center">
            Copyright 2021 - <Link to="/books" className="font-bold hover:opacity-80">Books</Link> by Adzra Fakhira
        </footer>
    )
}
