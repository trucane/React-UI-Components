import React from 'react';
import './Calculator.css';
import Display from '../DisplayComponents/DisplayCalculator';
import Buttons from '../ButtonComponents/ButtonContainer';

function CalculatorContainer (){
    return (
        <div className="container">
            <Display />
            <Buttons /> 
        </div>
    );
}

export default CalculatorContainer;