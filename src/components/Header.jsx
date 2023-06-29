import React from "react";

export default function Header() {
    return (
        <header className="nav-bar">
            <div className="left-nav">
                <img className="nav-image" src="./src/assets/troll-face.png" alt="navbar-icon" />
                <h2 className="nav-title">Meme Generator</h2>
            </div>
            <h4 className="nav-project">React Course - Project 6</h4>
        </header>
    )
   
}