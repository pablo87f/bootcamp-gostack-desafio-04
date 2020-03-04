import React from "react";
import { Comment } from "../comment";

import './style.css'

export function Post({ data: post }) {

    return (
        <div className="post">
            <div className="post-header">
                <div className='avatar'>
                    <img src={post.author.avatar} />
                </div>
                <div className="post-info">
                    <span className="author">{post.author.name}</span>
                    <span className="created_at">{post.date}</span>
                </div>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
            <hr className="separator" />
            <div className="post-comments">
                {post.comments.map(comment => <Comment key={comment.id} 
                data={comment} />)}
            </div>
        </div>
    )
}

