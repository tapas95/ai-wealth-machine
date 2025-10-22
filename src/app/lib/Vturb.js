'use client';
import React, { useEffect } from "react";

const Vturb = () => {
    const videoHTML = `<vturb-smartplayer id="vid-68f0c63981e93bf7cd48dc02" data-autoplay="1" 
        data-muted="1"></vturb-smartplayer>`;
    useEffect( () => {
        const s = document.createElement( "script" );
        s.src="https://scripts.converteai.net/2ff821eb-61c4-4c7f-9ce4-865740eaf07e/players/68f0c63981e93bf7cd48dc02/v4/player.js";
        s.async=!0;
        document.head.appendChild( s );
        return () => {
            document.head.removeChild( s );
        }
    }, [] );
    return(
        <div className="sm:border-2 border-white sm:rounded-3xl overflow-hidden sm:shadow-primary" dangerouslySetInnerHTML={ { __html: videoHTML } } />
    )
}
export default Vturb;