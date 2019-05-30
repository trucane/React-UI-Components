import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import Footer from  '../FooterComponents/Footer';


function CardContainer () {
    return(
        <div className="anc">
            <a href="https://reactjs.org" alt="React Website">
            <CardBanner />
            <CardContent />
            </a>
            <Footer />

        </div>
    );
}


export default CardContainer;

