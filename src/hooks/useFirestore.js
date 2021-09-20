import {  } from '@firebase/firestore';
import { useState, useEffect } from 'react';
import { db, collection, onSnapshot, query, orderBy } from '../firebase/config';

const useFirestore = (coll) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, coll), orderBy('timestamp', 'desc')), (snapshot) => {
            const documents = [];
            snapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id })
            })
        setDocs(documents);
        });
        return () => unsub();
    }, [coll]);

    return { docs };
}

export default useFirestore;
