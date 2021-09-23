import React, {useState} from 'react'
import Comments from './Comments'

const MainContent = ({appData}) => {

    const [hideComment, setHideComment] = useState(false)
    const [likes, setLikes] = useState(appData.upvotes)
    const [declikes, setdecLikes] = useState(appData.downvotes)

    function handleClick() {
        setHideComment((handleClick) => !handleClick)
    }

    function appendUpVotes(e){
            setLikes(++appData.upvotes) 
    }

    function decreaseLikes(){
        setdecLikes(--appData.downvotes)
    }

    return (
        <>
           <h1>{appData.title}</h1> 
           <p>{` ${appData.views} Views | Uploaded Date ${appData.createdAt}`}</p>
           <button onClick={appendUpVotes}>{`${likes} 👍`}</button> <button onClick={decreaseLikes}>{`${declikes}👎 `}</button> <br/> <br/>
           <button onClick={handleClick}>Hide comments</button>
           <hr></hr>
           { hideComment ? null : <Comments commentArr={appData.comments}/> }
        </>
    )
}

export default MainContent
