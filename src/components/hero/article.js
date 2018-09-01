import React from 'react'
import styled from 'styled-components'

const Article = styled.section`
    width: 31.5%;
    margin-top: -215px;
`
const ArticleImage = styled.div`
    height: 215px;
    background-color: #DEDEDD;
    position: relative;

  div {
    background-repeat: no-repeat;
    background-size: cover;
  }

  button {
    border: none;
    text-transform: uppercase;
    outline: none;
    color: #fff;
    cursor: pointer;
    position: absolute;
    font-weight: 700;
    font-size: 12px;
    bottom: 0;
    right: 0;
    padding: 11px 63px 8px 31px;
    background-color: ${props => props.active ? '#0066BB' : '#172837'};

    &::after {
      display: flex;
      justify-content: center;
      align-items: center;
      content: '>';
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 32px;
      background-color: ${props => props.active ? '#0077D5' : '#2D3841'};
    }
  }
`
const ArticleText = styled.div`
    background-color: #fff;
    padding: 42px 30px 31px 30px;
    font-family:'Open Sans', sans-serif;

    h4 {
        text-transform: uppercase;
        font-weight: 900;
        position: relative;
        letter-spacing: 0px;
        word-spacing: 2px;

        &::before {
            position: absolute;
            display: block;
            content: '';
            height: 2px;
            width: 27px;
            top: -8px;
            background-color: #FFC600;
        }
    }

    p {
        margin-top: 18px;
        font-size: 13px;
        line-height: 19px;
        word-spacing: 2px;
    }
`

export default (props) => (
                <Article>
                    <ArticleImage active={props.active}>
                        <div>&nbsp;</div>
                        <button>read more</button>
                    </ArticleImage>
                    <ArticleText>
                        {props.children}
                    </ArticleText>
                </Article>
)
