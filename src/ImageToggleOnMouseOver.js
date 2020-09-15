import React, { useRef } from 'react';

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imgaeRef = useRef(null)

    return (
        <img onMouseOver={()=>{
            imgaeRef.current.src=secondaryImg;
        }} onMouseOut={()=>{
            imgaeRef.current.src=primaryImg;
        }}
            src={primaryImg}
            alt="" ref={imgaeRef}
        />

    );
};

export default ImageToggleOnMouseOver;