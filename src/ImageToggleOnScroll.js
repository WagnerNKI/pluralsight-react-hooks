import React, { useEffect, useRef, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {

    const imgaeRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const isInView = ()=>{
        const rect = imgaeRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    const [inView, setInview] = useState(false);

    useEffect(()=>{
        setIsLoading(false)
        setInview(isInView())
        window.addEventListener("scroll",scrollHandler);

        return()=>{
            window.removeEventListener("scroll",scrollHandler)
        };
    },[]);

    const scrollHandler = ()=>{
        setInview(isInView());
    };

    return (
        <img 
            src={isLoading? "data:image.gif;" : inView? secondaryImg : primaryImg}
            alt="" ref={imgaeRef}
        />

    );
};

export default ImageToggleOnScroll;