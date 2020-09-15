import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOVer = () =>{

    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/1cbd9e62bcfa40cb7143de54d6b61286--world-maps-vector-illustrations.jpg" 
                                    secondaryImg="/static/speakers/download (1).jpg"
                                    alt=""/>
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/11-pb-4e583ed2.jpg" 
                                    secondaryImg="/static/speakers/download.jpg"
                                    alt=""/>
        </div>
    );
};

export default ImageChangeOnMouseOVer;