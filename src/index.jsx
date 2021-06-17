import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Header from './component/Header'
import Footer from './component/Footer'
import Button from './component/Button'
import "./index.css"

const buttonHome = new Button('Home Page');
const buttonReports = new Button("Project Reports");
const buttonBlogs = new Button("Blogs");
const buttonGames = new Button("Games");
const buttons = [buttonHome, buttonReports, buttonBlogs, buttonGames];
//<Header buttons = {buttons}/>
const buttonProto = buttonHome.buttonRender();

function mainViewer() {
    const body = (
        <div>
            <Header buttons = {buttons}/>
            <App />
            <Footer />
        </div>  
    );

    ReactDOM.render(
        body,
        document.getElementById('root')
    );
}

mainViewer();