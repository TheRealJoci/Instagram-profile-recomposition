import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import plus from '../res/plus.png';

const UploadForm = () => {
    const [file, setFile] = useState<Blob | null>(null);
    const [error, setError] = useState("");

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const selected = e.currentTarget.files;

        if (selected && types.includes(selected[0].type)) {
            setFile(selected[0]);
            setError("");
        }
        else {
            setFile(null);
            setError('Select correct image file(png/jpeg)!')
        }
    }
    
    
    return (
        <form className="upload-form">
            { !file && <div className="input">
                <label htmlFor="file-input">
                    <img src={plus} alt="add"/>
                </label>
                <input type="file" id="file-input" className="file-input" onChange={changeHandler}/>
            </div> }
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div style={{width: 45}}></div>}
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm

