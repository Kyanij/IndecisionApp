import React from 'react';

const Header = (props) => (
            <div class="header">
            <div className="container">
            <h1 class="header__title">{props.title}</h1>
            {props.subtitle && <h2 class="header__subtitle">{props.subtitle}</h2>}
            </div>
            </div>
)

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;