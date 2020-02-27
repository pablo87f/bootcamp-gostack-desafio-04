import React, { Component } from "react";
import './style.css'
import { render } from "react-dom";

export class PostList extends Component {
    
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Goku",
                    avatar: "http://localhost:8080/avatars/goku.png"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://url-da-imagem.com/imagem.jpg"
                        },
                        content: "Conteúdo do comentário"
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: "Goku",
                    avatar: "http://localhost:8080/avatars/goku.png"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://url-da-imagem.com/imagem.jpg"
                        },
                        content: "Conteúdo do comentário"
                    }
                ]
            },
            {
                id: 3,
                author: {
                    name: "Goku",
                    avatar: "http://localhost:8080/avatars/goku.png"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://url-da-imagem.com/imagem.jpg"
                        },
                        content: "Conteúdo do comentário"
                    }
                ]
            },
        ]
    };

    render() {
        return (
            <div className="main-content" >
                <div className="list-content">
                    <div className="post">
                        <div className="post-header">
                            <div className='avatar'>
                                <img src="http://localhost:8080/avatars/pablo-avatar.jpeg" />
                            </div>
                            <div className="post-info">
                                <span className="author">Pablo Fernandes</span>
                                <span className="created_at">04 Nov 2020</span>
                            </div>
                        </div>
                        <div className="post-content">
                            <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
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
                    <div className="post">
                        <div className="post-header">
                            <div className='avatar'>
                                <img src="http://localhost:8080/avatars/pablo-avatar.jpeg" />
                            </div>
                            <div className="post-info">
                                <span className="author">Pablo Fernandes</span>
                                <span className="created_at">04 Nov 2020</span>
                            </div>
                        </div>
                        <div className="post-content">
                            <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
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
                </div>
            </div>
        )
    }

}