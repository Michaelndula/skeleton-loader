import React, { useEffect, useState } from 'react';
import SkeletonElement from '../skeletons/skeletonElements';
import SkeletonArticle from '../skeletons/skeletonArticle';

const Articles = () => {

    const [articles, setArticles] = useState(null);

    useEffect(() =>{
        const fetchArticles = async () => {
            const art = await fetch('https://jsonplaceholder.typicode.com/posts');
            const artData = await art.json();
            setArticles(artData);
        };

        const timer = setTimeout(fetchArticles, 5000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <div className="articles">
            <h2>Articles</h2>

            {articles && articles.map(article => (
                <div className='article' key={ article.id }>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            ))}

            {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme="dark"/>)}
        </div>
    );
};

export default Articles;