import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNav.css';

const MainNav = props => {
    return (
        <React.Fragment>
            <MainHeader>
                <div class = "title">
                    <h1 class = "baf">BAFFY</h1>
                <h3 class = "baf2"> BUILD-A-FIT FOR YOU</h3> 
                </div>
               
                <nav>
            <NavLinks/>
        </nav>
            </MainHeader>
        </React.Fragment>
    );
};
export default MainNav;

