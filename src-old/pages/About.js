import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const About = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <div className="bg-gray-50 p-4 rounded-md mt-4">
                <p className="text-2xl">About</p>
                <br />
                <p className="mt-4">AGORI is a website that showcases our projects and blog posts.</p>
                <p className="mt-4">The website is open-sourced and available on <a href="https://github.com/GuglioIsStupid/agori.dev" className="text-blue-500 hover:underline">GitHub</a>.</p>
            </div>
        </div>

    );
}

export default About;