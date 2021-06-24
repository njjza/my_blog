import React from 'react';
import "./index.css";

const preventOpen = (e) => {
    e.preventDefault();
    return false;
}

const reports = (
    <div className = "blogs-list"> 
    <a href = "https://www.google.ca" onClick = {preventOpen}><h2 className = "basiclinearquantum"> Basic Linear Algebra of Quantum Computing </h2></a>
    <p>
        Covered most fundamental part of the linear algebras that is going to be used in quantum computing.
    </p>
    <p> Briefly describe the Hermitian, Normal, Unitary Matrix</p>
    <p> The usage of outer product, tensor product, and inner product in quantum computing </p>
    <p> This is not finished, and will be updated on why complex numbers and it's hilbert space are used to describe quantum mechanics.</p>
    </div>
);

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            el : reports
        };
    }

    handleClick (e) {
        var elName = e.srcElement.className;
        if(elName !== "" && elName !== "mainViewer") {
            elName = elName.toLowerCase();
            const reportRef = process.env.PUBLIC_URL + "/blogs/" + elName + ".html";
            const elNew = (<iframe src={reportRef} title = "Basic Linear Algebera" />);
            console.log(reportRef);
            this.setState(() => ({
                el : elNew
            }));
        }

        else if (elName === "mainViewer") {
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
            <div className = "BlogPage">
                {this.state.el}
            </div>
        );
    }
}

export default BlogPage;