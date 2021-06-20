import React from 'react';

class Button {
    constructor(name) {
        this.state = {
            buttonName : name,
            clicked : false
        };
    }

    getState () {
        return this.state.clicked;
    }

    getName () {
        return this.state.buttonName;
    }

    buttonRender() {
        return(
            <button key = {this.state.buttonName}>
                {this.state.buttonName}
            </button>
        );
    }

    #pageRender() {
        return (
            <div>
                <p>this is a test message of button</p>
            </div>
        );
    }
}

export default Button;