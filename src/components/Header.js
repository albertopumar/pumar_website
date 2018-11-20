import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    padding-top: 50px;
    position: fixed;
    z-index: 10;
    width: 100%;
    
    & h1 {
        padding-left: 30px;
        display: inline-block;
        color: #ffffff;
        position: relative;
    }
`;

const Header = (props) => {
    return (
        <HeaderContainer>
            {props.children}
        </HeaderContainer>
    );
};


export default Header;
