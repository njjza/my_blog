import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "./index.css"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Button from './Components/Button';

const buttonHome = new Button('Home Page');
const buttonReports = new Button("Project Reports");
const buttonBlogs = new Button("Blogs");
const buttonGames = new Button("Games");
const buttons = [buttonHome, buttonReports, buttonBlogs, buttonGames];

function header() {
    ReactDOM.render(
        <Header buttons = {buttons} />,
        document.getElementById('header')
    )
}

function footer() {
    ReactDOM.render(
        <Footer />,
        document.getElementById('footer')
    )
}
function mainViewer() {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

header();
mainViewer();
footer();