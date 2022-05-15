import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import footerStyles from './footer.module.scss';
const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                        author
                }
            }
        }
    `);
    return (
        <footer className={footerStyles.footer}>
            <p>© 2020 • Created by <Link className={footerStyles.link} to="/">{data.site.siteMetadata.author}</Link>.</p>
        </footer>
    )
};

export default Footer;