import React from 'react';
import { Link } from 'react-router-dom';

// Header styled with tailwindcss

const Header = () => {
    return (
        <div className="bg-purple-700 text-white p-4 rounded-md">
            {/* AGORI on left, home and about on right */}
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    {/* bold text */}
                    <Link to="/" className="hover:underline hover:scale-110 transform transition duration-250 font-bold">AGORI</Link>
                </div>
                <div className="flex space-x-4">
                    <Link to="/" className="hover:underline hover:scale-110 transform transition duration-250">Home</Link>
                    <Link to="/projects" className="hover:underline hover:scale-110 transform transition duration-250">Projects</Link>
                    <Link to="/about" className="hover:underline hover:scale-110 transform transition duration-250">About</Link>
                    <Link to="/blog" className="hover:underline hover:scale-110 transform transition duration-250">Blog</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;