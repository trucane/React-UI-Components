import React from 'react';
import './Card.css';




function CardContent(){
    return (
        <div className="card-container">
            <img src='https://cdn-images-1.medium.com/max/1500/1*y6C4nSvy2Woe0m7bWEn4BA.png' alt="logo"/>
            <div className="card-content-container-content">
                <h4>Get Started with React</h4>
                <p>
                    React makes it painless to create interactive UIs.
                    Design simple views for each state in your application.
                </p>
                <a href="https://reactjs.org/">reactjs.org</a>
            </div>
        </div>
    );
}

export default CardContent;