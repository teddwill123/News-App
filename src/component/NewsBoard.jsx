// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import News from './News'

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {


        let url= `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));

            // console.log(response);
    },[category])


  return (
    <div>
      <h2 className='text-center pt-4'>Latest <span className='badge bg-primary text-dark'>News</span></h2>
      {articles.map((news, index) => {
        return <News key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard



    // const [article, setArticle] = useState

    // useEffect(() => {
    //     let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
    //     try {
    //         async function fetchData (){
    //             const response = await axios.get(url);
    //             console.log(response.data)
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }

     
    // } ,[]