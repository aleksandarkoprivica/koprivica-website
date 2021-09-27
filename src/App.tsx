import React from 'react';
import './App.css';
import Typical from 'react-typical';
import {Helmet} from 'react-helmet';
import favicon from './images/logo.png';
import Div100vh from 'react-div-100vh';

const steps = [
    'Hello 👋', 1000,
    'My name is Aleksandar', 1000,
    'I am working as a Frontend developer', 1000,
    'Check my social networks 👇', 1000
];

function App() {
    return (
        <Div100vh className='screen'>
            <Helmet>
                <title>Aleksandar Koprivica </title>
                <link id="favicon" rel="icon" href={favicon} type="image/x-icon" data-react-helmet="true" />
                <meta name="title" content="Aleksandar Koprivica "/>
                <meta name="description"
                      content="Information Systems Engineer, working as a Frontend developer. Novi Sad, Serbia."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://metatags.io/"/>
                <meta property="og:title" content="Aleksandar Koprivica "/>
                <meta property="og:description"
                      content="Information Systems Engineer, working as a Frontend developer. Novi Sad, Serbia."/>
                <meta property="og:image"
                      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://metatags.io/"/>
                <meta property="twitter:title" content="Aleksandar Koprivica "/>
                <meta property="twitter:description"
                      content="Information Systems Engineer, working as a Frontend developer. Novi Sad, Serbia."/>
                <meta property="twitter:image"
                      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
            </Helmet>
            <div className="container">
                <Typical
                    className="text"
                    steps={steps}
                    loop={1}
                    wrapper="p"
                />
            </div>
            <div className="social">
                <div className="text">
                    <p>
                        <a href="https://sr-rs.facebook.com/aleksandar.koprivica" target="_blank">Facebook.</a>
                        <a href="https://www.linkedin.com/in/aleksandarkoprivica1/" target="_blank">Linkedin</a>
                        <a href="https://github.com/aleksandarkoprivica" target="_blank">Github.</a>
                        {/*<a href="https://sr-rs.facebook.com/aleksandar.koprivica" target="_blank">CV.</a>*/}
                    </p>
                </div>
            </div>
        </Div100vh>
    )
}

export default App;
