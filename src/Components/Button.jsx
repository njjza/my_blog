import React from 'react';

class Button {
    constructor(name) {
        this.buttonName = name;
    }

    getName () {
        return this.buttonName;
    }

    buttonRender() {
        return(
            <button key = {this.buttonName}>
                {this.buttonName}
            </button>
        );
    }
}

export default Button;