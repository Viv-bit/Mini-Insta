import React from "react";
import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid= ({setSelectedImg}) => {
    const { docs } = useFirestore('images');

    return(
        <div className="img-grid">
            { docs && docs.map(docs => (
                <motion.div className="img-wrap" key={docs.id}
                    layout
                    whileHover={{opacity: 1}}
                    onClick={() => {setSelectedImg(docs.url)}}
                >
                    <motion.img src={docs.url} alt="Freshly uploaded image"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 1}}
                    />
                </motion.div>
            ))}
        </div>
    )
};

export default ImageGrid;