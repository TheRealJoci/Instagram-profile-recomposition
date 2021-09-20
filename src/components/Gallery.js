import React from 'react'
import useFirestore from '../hooks/useFirestore';

const Gallery = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className="gallery">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt={doc.id}/>
                </div>
            ))}
        </div>
    )
}

export default Gallery;