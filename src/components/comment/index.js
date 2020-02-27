import React from "react";
import './style.css'

export function Comment({ data: comment }) {

    return (
        <div className="comment">
            <div className="avatar">
                <img src={comment.author.avatar} />
            </div>
            <div className="comment-content">
                <span className="author">{comment.author.name}</span>
    <span className="comment-text">{comment.content}</span>
            </div>
        </div>
    )
}

