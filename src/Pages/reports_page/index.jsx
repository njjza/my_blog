import React from 'react';
import "./index.css";

const preventOpen = (e) => {
    e.preventDefault();
    return false;
}

const reports = (
    <div className = "reports-list"> 
    <a href = "https://www.google.ca" onClick = {preventOpen}><h2> FloWaveNet Report </h2></a>
    <p> This report demonstrates our understanding of the FloWaveNet model, a state of the art voice regeneration neural networks that is based on the WaveNet.</p>
    <p> Abstract </p>
    <p>We want to research on audio synthesis, specifically, to implement a vocoder that generates more 
        natural sound than traditional TTS systems, reduce the gap between synthesizing voice and human voice, 
        increase the conversion efficiency and avoid errors. An efficient end-to-end waveform
        audio synthesis component would be a crucial part of TTS systems.
    </p>
    <a href = "https://www.google.ca" onClick = {preventOpen}><h2> Word2Vec Report </h2></a>
    <p> This report demonstrates our understanding of the Word2Vec, and its usage on sentiment analysis.</p>
    <p> Abstract </p>
    <p> Movie reviews are an important way to gauge the performance of a movie. While
        providing a numerical/stars rating to a movie tells us about the success or failure
        of a movie quantitatively, a collection of movie reviews is what gives us a deeper
        qualitative insight on different aspects of the movie.
    </p>
    </div>
)
class ReportPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            el : reports
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        var elName = e.target.innerText.toLowerCase();

        if(e.srcElement.localName === "h2") {
            elName = elName.match(/(\w*)(?=(\s))/);
            const reportRef = process.env.PUBLIC_URL + "/reports/" + elName[0] + ".pdf";
            const elNew = (
                            <embed src={reportRef} type="application/pdf" />);
            this.setState(() => ({
                el : elNew
            }));
        }
        else if (e.srcElement.innerText === "Project Reports") {
            this.setState(() => ({
                el : reports
            }));
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
            <div className = "ReportPage">
                {this.state.el}
            </div>
        );
    }
}

export default ReportPage;