import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_API_KEY;
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.articles) {
          const validArticles = data.articles.filter(article => article.title && article.description);
          setArticles(validArticles);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, [category]);

  return (
    <div className="py-4">
      <h2 className="text-center mb-4">Latest <span className="badge bg-danger ms-2">{category.charAt(0).toUpperCase() + category.slice(1)}</span></h2>
      {loading && <div className="text-center"><p>Loading news...</p></div>}
      <div className="d-flex flex-wrap justify-content-center">
        {articles && articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem 
              key={index} 
              title={news.title} 
              description={news.description} 
              src={news.urlToImage} 
              url={news.url}
            />
          ))
        ) : (
          !loading && <div className="alert alert-info text-center">No news available</div>
        )}
      </div>
    </div>
  );
}

export default NewsBoard;