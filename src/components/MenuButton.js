import React from 'react';
import styled from 'styled-components'

const ButtonContainer = styled.div`
    position: relative;
    margin-right: 1.2em;
    float: right;
    z-index: 1;
    & button {
        cursor: pointer;
        border: none;
        background: none;
        &:focus {
            outline: 0 !important;
        }
        & i {
            padding: 0.8em;
            color: #fff;
            border: 1px solid #000;
            background: #000;
            border-radius: 50%;
        }
    }
`;

const MenuButton = (props) => {
    return (
        <ButtonContainer>
            <button type="button" onClick={props.triggerMenu}>
                <i className="material-icons">menu</i>
            </button>
        </ButtonContainer>
    );
};


export default MenuButton;
