import React from 'react'
import styled from 'styled-components'

const Search = styled.span`
    margin: 3px 6px;
    background-color: #0066BB;
    border-radius: 100%;
    height: 38px;
    width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default () => (
    <Search>
        <img src="./static/icons/search.png" alt="search icon"/>
    </Search>
)


            
        