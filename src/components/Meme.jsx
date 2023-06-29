import React from "react";
import memesData from "../memesData"

export default function Meme() {

    function getMemesData() {
        // get the array from memes data
        const memesArray = memesData.data.memes
        
        // make a random index based on the memeArray length
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        // select url with the help of the random index number 
        const url = memesArray[randomNumber].url 
    }
    return (
        <main>
            <div className="form">
                <input 
                    placeholder="top text" 
                    className="form-input" 
                    type="text" 
                />
                <input 
                    placeholder="bottom text" 
                    className="form-input" 
                    type="text" />         
                <button 
                        onClick={getMemesData} 
                        className="form-button"
                >       Get a new meme image 🖼
                </button>
            </div>

            <img src="" alt="meme image" />             
        </main>
    )
}