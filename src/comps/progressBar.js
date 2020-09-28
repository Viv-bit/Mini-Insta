import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";
import { motion } from "framer-motion"

const ProgressBar = ({pictures, setPictures}) => {
    const { url, progress } = useStorage(pictures)
    
    useEffect(() => {
        if(url) {
            setPictures(null);
        }
    }, [url])
    return (
        <motion.div className="progress-bar" 
            initial={{width: 0}}
            animate={{width: progress + '%'}}
        >

        </motion.div>
    )
}

export default ProgressBar;