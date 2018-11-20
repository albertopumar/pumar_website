import React from 'react';
import styled from 'styled-components'

const Overlay = styled.div`
    background: #000;
    opacity: 0.8;
    position: absolute;
    z-index: 1;
    top: -100%;
    height: 100vh;
    width: 100%;
    &:before {
        background: black;
        content: "";
        height: 300%;
        left: -50%;
        opacity: 0.48;
        position: fixed;
        top: -110%;
        width: 300%;
    }
    ul {
      position: absolute;
      z-index: 10;
      li {
        color: #ffffff;
        cursor: pointer;
      }
    }
`;

const Menu = (props) => {
    return (
        <div className="menu-wrapper">
            <Overlay className="overlay">
                <div className="nav">
                    <ul className="menu-navigation">
                        {props.children.map((element) => {
                            return (
                                <li key={element.props.children}
                                    className="noselect"
                                    onClick={props.triggerMenu}>
                                    {element.props.children}
                                </li>)
                        })}
                    </ul>
                </div>
            </Overlay>
        </div>
    );
};


export default Menu;
