import React from 'react';

import HomePage from './home_page';
import ReportPage from './reorts_page';
import GamePage from './game_page';
import BlogPage from './blog_page';
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderPage : "HomePage",
            buttonArray : props.buttons,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        const triggeredButtonName = e.srcElement.innerText;
        
        switch (triggeredButtonName) {
            case "Home Page":
                this.setState((state) => ({
                    renderPage : "HomePage"
                }));
                break;
            case "Project Reports":
                this.setState((state) => ({
                    renderPage : "Reports"
                }));
                break;
            case "Blogs":
                this.setState((state) => ({
                    renderPage : "Blogs"
                }));
                break;
            
            case "Games":
                this.setState(state => ({
                    renderPage : "Games"
                }))
                break;
            default:
                {};
        }
    }

    componentDidMount () {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.handleClick, false);
    }

    render () {
        let el;
        switch (this.state.renderPage) {
            case "HomePage":
                el = <HomePage />
                break;
            case "Reports":
                el = <ReportPage />
                break;
            case "Blogs":
                el = <BlogPage />
                break;
            case "Games":
                el = <GamePage />
                break;
        }

        return (
            <div>
                <div className = "mainViewer">
                    {el}
                </div>
            </div>
        );
    };
}

export default App;