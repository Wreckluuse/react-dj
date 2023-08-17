import { React, useState, useEffect } from 'react';

function FileForm() {
    const [file, setFile] = useState();
    const [xml, loadXml] = useState();

    const handleChange = (event) => {
        setFile(event.target.files[0].text);
    }

    useEffect(() => {
        const parser = new DOMParser();
        if (file) loadXml(parser.parseFromString(file, 'text/xml'));
    }, [file])

    return (
        <div className='fileInput'>
            <input type='file' accept='text/xml' onChange={handleChange}></input>
        </div>
    )
}

export default FileForm