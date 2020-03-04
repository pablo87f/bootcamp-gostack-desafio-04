import React, { Component } from "react";
import { Post } from "../post";
import './style.css'

export class PostList extends Component {

    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Pablo F Silva",
                    avatar: "http://localhost:8080/avatars/pablo-avatar.jpeg"
                },
                date: "04 nov 2019",
                content: "Pessoal, alguém sabe se a EBANX está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Goku",
                            avatar: "http://localhost:8080/avatars/goku.png"
                        },
                        content: "Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras."
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
                content: "Pessoal, alguém sabe se a StackOverflow está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://localhost:8080/avatars/12.jpg"
                        },
                        content: "Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras."
                    },
                    {
                        id: 2,
                        author: {
                            name: "Lara Croft",
                            avatar: "http://localhost:8080/avatars/10.jpg"
                        },
                        content: "Era uma vez, um lugarzinho no meio do nada,. Com sabor de chocolate. Cheiro de terra molhada"
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
                content: "Pessoal, alguém sabe se a StackOverflow está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://localhost:8080/avatars/12.jpg"
                        },
                        content: "Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras."
                    },
                    {
                        id: 2,
                        author: {
                            name: "Lara Croft",
                            avatar: "http://localhost:8080/avatars/10.jpg"
                        },
                        content: "Era uma vez, um lugarzinho no meio do nada,. Com sabor de chocolate. Cheiro de terra molhada"
                    }
                ]
            },

        ]
    };

    render() {
        const { posts } = this.state
        return (
            <div className="main-content" >
                <div className="list-content">
                    {posts.map(post => <Post key={post.id} data={post} />)}
                </div>
            </div>
        )
    }

}