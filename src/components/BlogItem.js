import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogItem({ post }) {
    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-xl font-bold">{post.title}</p>
            <p className="text-gray-500">{post.date}</p>
            <p>{post.preview}</p>
        </div>
    )
}