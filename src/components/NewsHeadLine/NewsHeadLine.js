import React, { Fragment, useState, useEffect } from 'react';
import News from '../News/News';

const NewsHeadLine = (props) => {
    const news = props.news;
    return (
        <div style={{marginTop: '65px'}}>
            {
                news.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default NewsHeadLine;