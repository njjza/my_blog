import React from 'react';
import './index.css';

const personalLogo = process.env.PUBLIC_URL + "/img/cat.jpeg";
const resumeSrc = process.env.PUBLIC_URL + "/asset/resume.pdf";

class HomePage extends React.Component {
    render () {
        const paragraph1 = "I am currently a 4th-year student at the University of Victoria. My interests and enthusiasm are Embedded systems, Web/App development, Machine Learning, and Quantum Computing.";
        const paragraph2 = "During my high school time, I mostly focused on web development. However, since I attend the university, I gradually shifted my attention to embedded system development and design and machine learning over NLP";
        const paragraph3 = "This blog is to document my journey of learning. For now, this blog will be focused on quantum computing and quantum information. Although we are still in the era of proving \"quantum advantage,\" quantum computing has shown its potential usage in chemical simulation and machine learning."
        const paragraph4 = "Some of my projects reported are in the reports section. Feel free to read and correct any mistakes I made."
        const paragraph5 = "My email, GitHub profile, and LinkedIn profile are right down below in the footer area. Feel free to contact me at any time. I will reply right after I saw it.";
        return (
            <div className = "HomePage">
                <div className = "sideBar">
                    <img src = {personalLogo} alt = "Personal Logo"/>
                    <a href = {resumeSrc} class = "downloadButton" download = "Henry's Resume"> Resume </a>
                </div>
                <div className = "main">
                    <h2> Welcome, Bonjour, 你好</h2>
                    <h3> Who Am I ?</h3>
                    <p> {paragraph1} </p>
                    <p> {paragraph2} </p>
                    <p> {paragraph3} </p>
                    <p> {paragraph4} </p>
                    <p> {paragraph5} </p>
                </div>
            </div>
        );
    }
}

export default HomePage;