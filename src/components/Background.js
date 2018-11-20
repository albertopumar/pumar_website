import React from 'react';
import styled from 'styled-components'

const FullBackgroundImage = styled.div`
    background: url('images/computer-glasses.jpg') no-repeat 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
`;

const BackgroundGrain = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    
    &:before {
        background-image: url(images/grains.png);
        content: "";
        height: 300%;
        left: -50%;
        opacity: 0.48;
        position: fixed;
        top: -110%;
        width: 300%;
    }
`;

const Background = (props) => {
    return (
        <FullBackgroundImage>
            <BackgroundGrain>
                {props.children}
            </BackgroundGrain>
        </FullBackgroundImage>
    );
};


export default Background;
