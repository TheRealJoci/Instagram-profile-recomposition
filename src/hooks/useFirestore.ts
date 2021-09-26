import { Timestamp } from '@firebase/firestore';
import { useState, useEffect } from 'react';
import { db, collection, onSnapshot, query, orderBy } from '../firebase/config';

interface Record {
    id: string;
    timestamp: Timestamp;
    url: string;
}

const useFirestore = (coll: string) => {
    const [docs, setDocs] = useState<Record[]>([]);

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, coll), orderBy('timestamp', 'desc')), (snapshot) => {
            const documents: Record[] = [];
            snapshot.forEach((doc) => {              
                documents.push({...doc.data(), id: doc.id } as Record)
            })
        setDocs(documents);
        });
        return () => unsub();
    }, [coll]);

    return { docs };
}

export default useFirestore;