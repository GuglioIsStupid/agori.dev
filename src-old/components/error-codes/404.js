import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

export default function Error404() {
    return (
        <div className="container mx-auto">
            <Header />
            <div className="bg-gray-50 p-4 rounded-md mt-4">
                <h1 className="text-3xl font-bold">404 Not Found</h1>
                <p className="text-gray-500">The page you are looking for does not exist.</p>
                <Link to="/" className="text-blue-500 hover:underline">Back to home</Link>
            </div>
        </div>
    )
}