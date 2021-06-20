import React from "react";
import "./css/Header.css";

const personalLogo = process.env.PUBLIC_URL + "/img/home.png";
class Header extends React.Component {
    render () {
        const buttons = this.props.buttons;
        const buttonList = buttons.map((button) => {
            return (
                <li key = {button.getName()}> {button.buttonRender()} </li>
            )
        });

        return (
            <header>
                <nav>
                    <img src = {personalLogo} alt = "personal_logo" />
                    <ul>
                        {buttonList}
                    </ul>
                </nav>
                <div className = "Separator"></div>
            </header>
        );
    };
}

export default Header;