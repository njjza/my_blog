import React from 'react';

import HomePage from './Pages/home_page';
import ReportPage from './Pages/reports_page';
import GamePage from './Pages/game_page';
import BlogPage from './Pages/blog_page';
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {el : <HomePage />};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        const triggeredButtonName = e.srcElement.innerText;
        switch (triggeredButtonName) {
            case "Home Page":
                this.setState((state) => ({
                    el : <HomePage />
                }));
                break;
            case "Project Reports":
                this.setState((state) => ({
                    el : <ReportPage />
                }));
                break;
            case "Blogs":
                this.setState((state) => ({
                    el : <BlogPage />
                }));
                break;
            
            case "Games":
                this.setState(state => ({
                    el : <GamePage />
                }))
                break;
            default:
        }
    }

    componentDidMount () {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.handleClick, false);
    }

    render () {
        return (
            <div className = "mainViewer">
                {this.state.el}
            </div>
        );
    };
}

export default App;