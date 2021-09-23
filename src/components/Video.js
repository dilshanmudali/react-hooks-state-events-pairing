import React from 'react';


const Video = ({appData}) => {
    return (
        <iframe
            width="919"
            height="525"
            src={appData.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />

    )
}

export default Video