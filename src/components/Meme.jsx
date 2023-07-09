import React from "react";
import memesData from "../memesData"

export default function Meme() {

    // state of images
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })
    
    const [memeImage, setMemeImages] = React.useState(memesData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    
    function getMemesData() {
        // get the array from memes data
        const memesArray = memesData.data.memes
        
        // make a random index based on the memeArray length
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        // select url with the help of the random index number 
        const url = memesArray[randomNumber].url 

        setMeme(prevMeme => {
            return {...prevMeme, 
            randomImage: url}
        })
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />        
                <button 
                        onClick={getMemesData} 
                        className="form-button"
                >       Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>                       
        </main>
    )
}