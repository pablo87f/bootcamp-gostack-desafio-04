import React from "react";
import PropTypes from "prop-types";

import './style.css'

// {
//     id: 1,
//     author: {
//         name: "Pablo F Silva",
//         avatar: "http://localhost:8080/avatars/pablo-perfil.jpeg"
//     },
//     date: "04 nov 2019",
//     content: "Pessoal, alguém sabe se a EBanks está contratando?",
//     comments: [
//         {
//             id: 1,
//             author: {
//                 name: "Goku",
//                 avatar: "http://localhost:8080/avatars/goku.png"
//             },
//             content: "Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras."
//         }
//     ]
// },

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
                <div className="comment">
                    <div className="avatar">
                        <img src="http://localhost:8080/avatars/pablo-avatar.jpeg" />
                    </div>
                    <div className="comment-content">
                        <span className="author">Goku</span>
                        <span className="comment-text">Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

