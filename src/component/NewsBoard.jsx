import React, { useEffect, useState } from 'react';
import News from './News';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        
        console.log('API response:', data); // Log the entire response

        if (data && data.articles) {
          setArticles(data.articles);
        } else {
          console.error('Unexpected response structure:', data);
          setArticles([]); // Set to empty array if response structure is unexpected
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news articles');
        setArticles([]); // Set to empty array in case of error
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div className=''>
      <h2 className='text-center pt-4'>Latest <span className='badge bg-primary text-dark'>News</span></h2>
      {error ? (
        <p className='text-center'>{error}</p>
      ) : (
        articles.length > 0 ? (
          articles.map((news, index) => (
            <News key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          ))
        ) : (
          <p className='text-center'>No news articles available</p>
        )
      )}
    </div>
  );
};

export default NewsBoard;
