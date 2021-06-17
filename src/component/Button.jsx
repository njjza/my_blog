import React from 'react';

class Button {
    constructor(name) {
        this.buttonName = name;        
    }
    
    handleClick = () => {
        console.log('this is', this);
    }

    buttonRender() {
        return(
            <button onClick = {() => this.handleClick}>
                {this.buttonName}
            </button>
        );
    }

    pageRender() {
        return (
            <div>
                <p>this is a test message of button</p>
            </div>
        );
    }
}

export default Button;