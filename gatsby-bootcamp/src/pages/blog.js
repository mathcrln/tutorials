import React from 'react';
import Layout from '../components/Layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/Head';


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost (sort:
        {
          fields: publishedDate,
          order: DESC
        }
      ){
        edges{
          node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    
    
    
    `);

    return (
        <Layout>
        <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((post) =>{
                    return(
                        <li key={post.node.slug} className={blogStyles.post}>
                        <Link to={`/blog/${post.node.slug}`}>
                              <h2>{post.node.title}</h2>
                              <p>{post.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
};

export default BlogPage;