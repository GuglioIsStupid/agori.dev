import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const Home = () => {
    return (
        <div className="container mx-auto">
            <Header />
            
            <div className="bg-gray-50 p-4 rounded-md mt-4">                
                <div className="mt-4">
                    <p className="text-2xl">Home</p>
                    <div className="mt-4">
                        <div className="bg-white p-4 rounded-md">
                           <div className="mt-4">
                                <p className="text-2xl">Explore</p>

                                <div className="mt-4 flex flex-col">
                                    <div className="bg-white p-4 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {/* <Link to="/projects" className="text-xl hover:text-blue-500 transition duration-300">Projects</Link>

                                        <p className="text-sm mt-2">View our projects that we're working on, or have completed.</p> */}
                                        <div className="mt-4 flex flex-col">
                                            <p className="text-2xl">Projects</p>
                                            <p className="text-sm mt-2">View our projects that we're working on, or have completed.</p>
                                            <Link to="/projects" className="text-sm text-blue-500 hover:underline">View projects</Link>
                                        </div>

                                        <div className="mt-4 flex flex-col">
                                            <p className="text-2xl">About</p>
                                            <p className="text-sm mt-2">Learn more about us and our goals.</p>
                                            <Link to="/about" className="text-sm text-blue-500 hover:underline">Learn more</Link>
                                        </div>

                                        <div className="mt-4 flex flex-col">
                                            <p className="text-2xl">Blog</p>
                                            <p className="text-sm mt-2">Read our blog posts about our projects, or other topics.</p>
                                            <Link to="/blog" className="text-sm text-blue-500 hover:underline">Read blog</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Footer saying this page is still work in progress*/}
            <div className="bg-gray-50 p-4 rounded-md mt-4">
                <p>This website is still a work in progress.</p>
            </div>
        </div>
    );
}
export default Home;
