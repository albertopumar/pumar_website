import React from 'react';
import styled from 'styled-components'

const BlockQuoteWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
  blockquote {
    font-family: Georgia, Serif;
    font-size: 28px;
    font-style: italic;
    width: 725px;
    margin: 0.25em auto;
    padding: 0.35em 40px;
    line-height: 1.45;
    position: relative;
    color: #ffffff;
    &:before {
      content: '\\201C';
      font-size: 80px;
      display: block;
      padding-left: 10px;
      position: absolute;
      left: -20px;
      top: -20px;
      color: #7a7a7a;
    }
    cite {
      font-size: 14px;
      color: #7a7a7a;
      display: block;
      margin-top: 5px;
    } 
  }
`;

const BlockQuote = (props) => {
    return (
        <BlockQuoteWrapper>
            <blockquote>
                {props.children}
                <cite>{props.author}</cite>
            </blockquote>
        </BlockQuoteWrapper>
    );
};


export default BlockQuote;
