import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';


const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello there!</h1>
            <h2>I'm Mathieu, a 21 years old student in Software Engineering at Polytechnique Montréal.</h2>
            <p>Need a developer? <a href="https://mathcrln.com/contact">Contact me</a>.</p>
        </Layout>
    )
};

export default IndexPage;