import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

type ProgressBarProps = {
    file: Blob;
    setFile: React.Dispatch<React.SetStateAction<Blob | null>>;
}

const ProgressBar = ({file, setFile}: ProgressBarProps) => {

    const {url, progress} = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div className="progress-bar" style={{width: progress + '%' }}>{ Math.round(progress) }% </div>
    )
}

export default ProgressBar;