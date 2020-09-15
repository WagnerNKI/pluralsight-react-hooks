import React, { useEffect, useState } from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {

    const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
    const [mouseEventCount, setMouseEventCount] = useState(0);
    
    useEffect(() => {
        window.document.title = `SpeakerId: ${currentSpeakerId}`;
        console.log(`useEffect: setting title to ${currentSpeakerId}`)
    },[currentSpeakerId]);

    return (
        <div>
            <span>mouseEventCount: {mouseEventCount}</span>
            {["download",
                "download (1)",
                "download (2)",
                "download (3)"].map((speakerId) => {
                    return (
                        <div key={speakerId}
                            onMouseOver={() => {
                                setCurrentSpeakerId(speakerId);
                                setMouseEventCount(mouseEventCount+1)
                                console.log(`onMouseOVer:${speakerId}`)
                            }}>
                            <ImageToggleOnScroll
                                primaryImg={`/static/speakers/bw/${speakerId}.jpg`}
                                secondaryImg={`/static/speakers/${speakerId}.jpg`}
                                alt=""
                            />
                        </div>

                    )
                }
                )
            })
        </div>
    );
};

export default ImageChangeOnScroll;