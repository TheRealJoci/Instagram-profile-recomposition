import { useState, useEffect } from 'react';
import { storage, ref, uploadBytesResumable, getDownloadURL, db, collection, addDoc, serverTimestamp } from '../firebase/config';

const useStorage = (file: Blob & { name?: string}) => {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");

    useEffect(() => {
        const storageRef = ref(storage, 'images' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on('state_changed', (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
        }, () => {}, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            await addDoc(collection(db, "images"), { 
                url: url, 
                timestamp: serverTimestamp() 
            });
            setUrl(url);
        })
    }, [file]);
    
    return { progress, url };
}

export default useStorage;
