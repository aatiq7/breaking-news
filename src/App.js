import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import NewsHeadLine from './components/NewsHeadLine/NewsHeadLine';
import Header from './components/Header/Header';

function App() {
  const url = 'http://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=7ef3b608e97f4c619d72d39116843627';
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(news => setNews(news.articles))

    },[])

  return (
    <>
      <Header></Header>
      <NewsHeadLine news = {news}></NewsHeadLine>
    </>
  );
}

export default App;
