import React, { useState } from "react";
import ProgressBar from "./progressBar";

const UploadForm = () => {
    const [pictures, setPictures] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0]
        
        if(selected && types.includes(selected.type)) {
            setPictures(selected);
            setError("")
        } else {
            setPictures(null)
            setError("Kindly select a valid image of either png or jpeg type")

        }
    }

    return (
        <form>
           
             <input className="img-input" type= "file" onChange={handleChange} />
           
            <div className="output">
                { error && <div className="error"> {error} </div>}
                { pictures && <div> {pictures.name} </div>}
                { pictures && <ProgressBar pictures={pictures} setPictures={setPictures} /> }
            </div>

        </form>
    )
}

export default UploadForm