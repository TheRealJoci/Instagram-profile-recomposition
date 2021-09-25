import { useState, useEffect } from 'react';
import { db, collection, onSnapshot, query, orderBy } from '../firebase/config';

interface Record {
    id: string;
    url?: string;
}

const useFirestore = (coll: string) => {
    const [docs, setDocs] = useState<Record[]>([]);

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, coll), orderBy('timestamp', 'desc')), (snapshot) => {
            const documents: Record[] = [];
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
