import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
//<Route path="/blog/:id" element={<Blog />} />
// markdown parser
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';

//todo: DO A BETTER WAY OF HANDELING BLOG POSTS GRAHHHHH
const blogs = [
    {
        id: 1,
        date: "2024-02-27",
        title: "Rit Progress Update",
        preview: "A quick update on the progress on Rit.",
        content: `

# Rit Progress Update

## Introduction

Hey guys! It's Guglio here. I will be the one writing the blog for today.

Rit has been getting some really good progress. We are almost ready for the public Steam beta release.

I have been working on programming in the UI for the game. I had some ups and downs, but I am happy with what we have so far!

Some progress on the steam page. We are almost ready to publish the steam page, however we are just still waiting on some assets for the steam library and store page.

## What's next?

We are just going to be fixing some bugs here and there, and try to get some of the library assets finished.

Pretty short update, but I hope you guys are excited for the release! We are really excited to get this game out to the public.

Thanks for reading!

-Guglio
    `
    }
]

export default function BlogPost() {
    const { id } = useParams();
    const post = blogs.find(post => post.id === parseInt(id));

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>AGORIBlogs | {post.title}</title>
                <meta name="og:description" content={post.preview} />
                <meta name="og:title" content={"AGORIBlogs | " + post.title} />
                <meta name="og:type" content="article" />
                <meta name="og:url" content={"https://agori.dev/blog/" + post.id} />
                {/* <meta name="og:image" content="https://agori.dev/images/agori-logo.png" /> */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@AGORIStudios" />
                <meta name="twitter:title" content={"AGORIBlogs | " + post.title} />
                <meta name="twitter:description" content={post.preview} />
                {/* <meta name="twitter:image" content="https://agori.dev/images/agori-logo.png" /> */}

            </Helmet>

            <Header />

            <div className="bg-gray-50 p-4 rounded-md mt-4">
                <Link to="/blog" className="text-blue-500 hover:underline mb-4 block text-sm">Back to blog</Link>
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>

                <ReactMarkdown
                    remarkPlugins={
                        [remarkGfm]
                    }
                    components={{
                        table: ({node, ...props}) => <table className="table-auto" {...props} />,
                        th: ({node, ...props}) => <th className="border px-4 py-2" {...props} />,
                        td: ({node, ...props}) => <td className="border px-4 py-2" {...props} />,
                        tr: ({node, ...props}) => <tr className="border px-4 py-2" {...props} />,
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-4 mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold mt-4 mb-4" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-bold mt-4 mb-4" {...props} />,
                        h4: ({node, ...props}) => <h4 className="text-md font-bold mt-4 mb-4" {...props} />,
                        h5: ({node, ...props}) => <h5 className="text-sm font-bold mt-4 mb-4" {...props} />,
                        h6: ({node, ...props}) => <h6 className="text-xs font-bold mt-4 mb-4" {...props} />,
                        p: ({node, ...props}) => <p className="text-base" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-500" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal" {...props} />,
                        li: ({node, ...props}) => <li className="text-base" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-500 pl-4" {...props} />,
                        img: ({node, ...props}) => <img className="w-full" {...props} />,

                        code(props) {
                            const {children, className, node, ...rest} = props;
                            const match = /language-(\w+)/.exec(className || '');
                            return match ? (
                                <SyntaxHighlighter
                                    language={match[1]}
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    {...rest}
                                />
                            ) : (
                                <code className={className} {...rest}>
                                    {String(children).replace(/\n$/, '')}
                                </code>
                            )
                        }
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>
        </div>
    )
}