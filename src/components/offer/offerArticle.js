import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
    background-color: #FCFCFC;
    margin: 13px 0;
    padding: 34px 10px;
    width: 48%;
    flex-shrink: 0;
    display: flex;

    h4 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    p {
        font-size: 12px;
        line-height: 20px;        
    }
`
const iconsPositions = {
    contract: '0 0; width: 65px',
    freight: '-75px 0; width: 107px',
    storage: '-192px 0; width: 96px',
    consulting: '-298px 0; width: 79px',
}

const Icon = styled.div`
    display: flex;
    width: 160px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;

    div {
        background: url('./static/icons/icons.png') no-repeat top left; height: 70px;
        background-position: ${props => iconsPositions[props.icon]};
    }
`

export default (props) => (
    <Article>
        <Icon icon={props.icon}>
            <div></div>
        </Icon>
        <div>
            {props.children}
        </div>
    </Article>
)
