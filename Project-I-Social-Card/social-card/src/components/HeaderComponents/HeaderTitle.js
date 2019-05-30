import React from 'react';
import './Header.css';
import moment from 'moment'


function Headertitle (){
    return(
        <div className="header-title">
            <h3>LambdaSchool <small>@LambdaSchool . <span className="ts"> 26 Jan</span></small></h3>
        </div>
    )
}

  const timestamp =  moment().format('D MMM')
//  const ts = document.querySelector('.ts');
//  ts.textContent = timestamp;


export default Headertitle;