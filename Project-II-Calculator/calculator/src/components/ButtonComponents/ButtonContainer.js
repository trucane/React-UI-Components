import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';






// const calcContents = [
//     {
//         value: 'clear', 
//         style: 'action btn',
//     },

//     {
//         value: '÷',
//         style: 'btn signs',
//     },
//     {
//         value: '7',
//         style: 'btn',
//     },
//     {
//         value: '8',
//         style: ' btn',
//     },
//     {
//         value: '9',
//         style: 'btn',
//     },
//     {
//         value: 'x',
//         style: 'btn signs',
//     },
//     {
//         value: '4',
//         style: 'btn',
//     },
//     {
//         value: '5',
//         style: 'btn',
//     },
//     {
//         value: '6',
//         style: 'btn',
//     },
//     {
//         value: '-',
//         style: 'btn signs',
//     },
//     {
//         value: '1',
//         style: 'btn',
//     },
//     {
//         value: '2',
//         style: 'btn',
//     },
//     {
//         value: '3',
//         style: 'btn',
//     },
//     {
//         value: '+',
//         style: 'btn signs',
//     },

//     {
//         value: '0', 
//         style: 'action btn',
//     },

//     {
//         value: '=',
//         style: 'btn signs',
//     },
// ]






const  ButtonContainer = () => {

    // return(
    //     <div>
    //         < ActionButton ab={calcContents} />
    //     </div>
    // );
    let i = 9;
    let nums = 10

    // let res = []
    // while(i < nums){
    //     res.push(< NumberButton text="i"  style="btn number" />)
    // }

    return(
        <div className="calc-container">
            <div className="number-side">

                

                < ActionButton text="clear"  style="btn action" />
               
                 

                < NumberButton text="7"  style="btn number" />
                < NumberButton text="8"  style="btn number" />
                < NumberButton text="9"  style="btn number" />

                < NumberButton text="4"  style="btn number" />
                < NumberButton text="5"  style="btn number" />
                < NumberButton text="6"  style="btn number" />

                < NumberButton text="1"  style="btn number" />
                < NumberButton text="2"  style="btn number" />
                < NumberButton text="3"  style="btn number" />

                < ActionButton text="0"  style="btn action" />
            </div>
            <div className="operator-side">
            < ActionButton text="÷"  style="btn operator" />
            < ActionButton text="x"  style="btn operator" />
            < ActionButton text="-"  style="btn operator" />
            < ActionButton text="+"  style="btn operator" />
            < ActionButton text="="  style="btn operator" />
            </div>
        </div>
    );
}

export default ButtonContainer;
