import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const ProjectsList = [
    {
        name: "Rit.",
        description: "A free and open-sourced mania-styled rhythm game.",
        link: "/projects/rit",
        image: null,
        screenshots: [],
        tags: ["lua", "love2d", "rhythm game", "open-source", "game"]
    },
    {
        name: "Guys Vs. Gods",
        description: "Top-down action RPG game with a unique story and gameplay.",
        link: "/projects/guys-vs-gods",
        image: null,
        screenshots: [],
        tags: ["rpg", "action", "game"]
    },
    {
        name: "Not Too Bad",
        description: "A comic series that is the canonical sequel to Guys Vs. Gods, continuing the story a few generations later. You'll follow Kurtis Guy, Charlie Guy, Tori Sargoth and Alice Reeds in an adventure to end a cycle started so long ago.",
        link: "/projects/not-too-bad",
        image: null,
        screenshots: [],
        tags: ["comic"]
    },
    {
        name: "Challenges of Zandor",
        description: "An isekai novel series that we're trying to put our spin on, follow Night Terrasurge and Samuel Rosé into their journey into an unknown world with many mysteries and other wonders. This is mainly focused on the worldbuilding and characters.",
        link: "/projects/challenges-of-zandor",
        image: null,
        screenshots: [],
        tags: ["novel", "isekai"]
    },
    {
        name: "Shadow of Hazel",
        description: "A novel within the mythical world of Terralore. Dragons have been attacking many areas of the island of Zetalor during a civil war, and only one can save the island, and inevitably the entire world.",
        link: "/projects/shadow-of-hazel",
        image: null,
        screenshots: [],
        tags: ["novel"]
    },
]

const Projects = () => {
    return (
        <div className="container mx-auto">
            <Header />
            
            <div className="bg-gray-50 p-4 rounded-md mt-4">                
                <div className="mt-4">
                    <p className="text-2xl">Projects</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {ProjectsList.map((project, index) => {
                            return (
                                <div key={index} className="bg-white p-4 rounded-md">
                                    <p className="text-lg font-bold">{project.name}</p>
                                    <p className="text-sm">{project.description}</p>
                                    {project.tags.map((tag, index) => {
                                        return (
                                            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md mt-2 mr-2 inline-block">{tag}</span>
                                        );
                                    })}
                                    {project.image && (
                                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover mt-2" />
                                    )}
                                    {project.screenshots.length > 0 && (
                                        <div className="grid grid-cols-2 gap-4 mt-2">
                                            {project.screenshots.map((screenshot, index) => {
                                                return (
                                                    <img key={index} src={screenshot} alt={project.name} className="w-full h-24 object-cover rounded-md" />
                                                );
                                            })}
                                        </div>
                                    )}
                                    <Link to={project.link} className="text-sm text-blue-500 hover:underline">Read more</Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;
