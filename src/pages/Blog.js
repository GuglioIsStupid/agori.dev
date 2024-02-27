// Get all files in ../posts

import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import BlogItem from '../components/BlogItem';

const allPosts = [
    { 
        id: 1,
        date: "2024-02-27",
        title: "Rit Progress Update",
        preview: "A quick update on the progress on Rit."
    }
]

export default function Blog() {
    return (
        <div className="container mx-auto">
            <Header />
            <div className="bg-gray-50 p-4 rounded-md mt-4">   
                <div className="mt-4">
                    <p className="text-2xl">Blog</p>
                    {/*Grid 3x*/}
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        {allPosts.map((post, index) => {
                            return (
                                <Link to={`/blog/${post.id}`} key={index}>
                                    <BlogItem post={post} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}