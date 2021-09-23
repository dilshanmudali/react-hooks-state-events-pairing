import React from 'react'

const Comments = ({commentArr}) => {
    const data = commentArr.map(comment => {
        return (
            <>
                <h3 key={comment.user}>{comment.user}</h3>
                <p>{comment.comment}</p>
            </>
        )
    })

    return (
        <>  
            <h2>{commentArr.length} Comments</h2>
            {data}
        </>
    )
}

export default Comments
