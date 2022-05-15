import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout'
import Head from '../components/Head';

const AboutPage = () => {
    return (
        <div>
        <Head title="About"/>
            <Layout>
            <h1>About</h1>
            <p>You want to work with me? Please don't hesitate to <Link to="contact">reach out</Link>!</p>
            </Layout>
        </div>
    )
};

export default AboutPage;