import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export interface Article {
    title: string;
    date: string;
    content: any;
    category: string;
}

export interface ArticleProp {
    articleId: string;
    date?: string;
}
export default function Article(props: ArticleProp) {
    const { articleId } = props;

    const [article, setArticle] = useState<Article>(Object);

    useEffect(() => {
        axios.get(`http://localhost:3030/articles/${articleId}`).then(res => {
            // TODO: handle request no article
            console.log("received articles", res.data);
            setArticle(res.data);
        });
    }, []);

    return (
        <div>
            <div className="article-info">
                <div className="article-name">
                    <h2>{article.title}</h2>
                </div>
                <div className="article-date">
                    <h2>{article.date}</h2>
                </div>
                <div className="article-category">
                    <h2>{article.category}</h2>
                </div>
                <div className="article-content">
                    <h2>{article.content}</h2>
                </div>
            </div>
        </div>
    );
}
