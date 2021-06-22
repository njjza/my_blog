import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import Header from './component/Header';
import Footer from './component/Footer';
import Button from './component/Button';

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
        <App buttons = {buttons}/>,
        document.getElementById('root')
    );
}

header();
mainViewer();
footer();