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
        date: "2024-02-26",
        title: "Test blog post",
        preview: "This is a test blog post",
        content: `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://agori.dev.
        
* Lists
* [ ] todo
* [x] done
        
A table:
        
| a | b |
| - | - |

~~~lua
function HelloBlog(hello)
    print(hello)
end 

HelloBlog("Hello, Blog!")
~~~
    `
    }
]

export default function BlogPost() {
    const { id } = useParams();
    const post = blogs.find(post => post.id === parseInt(id));

    {/*Create an embed for external links*/}
    const LinkRenderer = ({ ...children }) => <Link {...children} />;
    const ImageRenderer = ({ ...children }) => <img {...children} />;

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
                <Link to="/blog" className="text-blue-500 hover:underline mb-4 block">Back to blog</Link>
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <p className="text-gray-500">{post.date}</p>
                <ReactMarkdown 
                    remarkPlugins={
                        [remarkGfm]
                    }
                    components={{
                        table: ({node, ...props}) => <table className="table-auto" {...props} />,
                        th: ({node, ...props}) => <th className="border px-4 py-2" {...props} />,
                        td: ({node, ...props}) => <td className="border px-4 py-2" {...props} />,
                        tr: ({node, ...props}) => <tr className="border px-4 py-2" {...props} />,
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-bold" {...props} />,
                        h4: ({node, ...props}) => <h4 className="text-md font-bold" {...props} />,
                        h5: ({node, ...props}) => <h5 className="text-sm font-bold" {...props} />,
                        h6: ({node, ...props}) => <h6 className="text-xs font-bold" {...props} />,
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