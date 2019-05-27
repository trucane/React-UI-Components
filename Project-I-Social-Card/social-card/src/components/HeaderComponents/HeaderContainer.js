import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';




function HeaderContainer (){
    return (
        <div className='headerContainer'>
            <header>
                <HeaderTitle />
                <HeaderContent />
            </header>
        </div>
    );
}

export default HeaderContainer;
