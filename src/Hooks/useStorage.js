import { useState, useEffect} from "react";
import { pictureStorage, pictureFireStore, timeStamp } from "../firebase/config";


const useStorage = (pictures) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = pictureStorage.ref(pictures.name)
        const collectionRef = pictureFireStore.collection('images');

        storageRef.put(pictures).on("state_changed", (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            collectionRef.add({ url, createdAt })
            setUrl(url)
        }

        )}, [pictures]);

        return {
            progress, url, error
        }
}

export default useStorage;

