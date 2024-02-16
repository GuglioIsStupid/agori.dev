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
                <p className="mt-4">The website is open-sourced and available on GitHub.</p>
                <p className="mt-4">Check out the homepage for our projects and blog posts.</p>
                <Link to="/" className="text-sm text-blue-500 hover:underline">Go back to homepage</Link>
            </div>
        </div>

    );
}

export default About;