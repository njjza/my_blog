import React from "react";
import "./css/Footer.css"

const githubLogoRef = process.env.PUBLIC_URL + "/img/github.png";
const linkedinLogoRef = process.env.PUBLIC_URL + "/img/linkedin.png";

const linkedinURL = "http://www.linkedin.com/in/henry-jiang-656554141";
const githubURL = "http://github.com/njjza";

class Footer extends React.Component {
    render () {
        return (
            
            <footer>
                <p> Built With React </p>
                <div>
                    <a href = {githubURL} target="_blanck">
                        <img src = {githubLogoRef} alt = "github_link" />
                    </a>
                    <a href = {linkedinURL} target = "_blanck">
                        <img src = {linkedinLogoRef} alt = "linkedin_link" />  
                    </a>
                </div>
            </footer>
        );
    };
}

export default Footer;