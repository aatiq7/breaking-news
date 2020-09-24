import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

const News = (props) => {
    const {urlToImage, title, description, url} = props.article;
    const cardStyle = { 
        width: '55%', 
        boxShadow: '0px 0px 5px lightgray',
        margin: '10px auto'  
        }
    return (
    
    <Card style={cardStyle}>
    <Card.Img variant="top" src={urlToImage} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <form action={url} target="_blank">
        <Button variant="contained" color="secondary" type="submit">View Details</Button>
        </form>
    </Card.Body>
    </Card>
    );
};

export default News;