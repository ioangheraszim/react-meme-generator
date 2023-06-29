import React from "react";

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input placeholder="top text" className="form-input" type="text" />
                <input placeholder="bottom text" className="form-input" type="text" />         
                <button className="form-button">Get a new meme image 🖼</button>
            </form>             
        </main>
    )
}