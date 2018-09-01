import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MenuLink = styled.li`
    display: flex;
    align-items: center;
    position: relative;

    &:hover::after {
      height: 5px;
    }

    &::after {
      transition: .2s;
      display: block;
      position: absolute;
      content: '';
      width: 76%;
      left: 12%;
      bottom: -18px;
      height: 0;
      background-color: #0066BB;
    }

    a {
      color: #000;
      font-size: 12px;
      font-weight: 700;
      padding: 15px 10px;
      margin-left: 14px;
      margin-right: 17px;
      text-transform: uppercase;
      text-decoration: none;
      position: relative;

    }
  }
`



export default (props) => (
    <MenuLink>
        <Link to="/" >{props.children}</Link>
    </MenuLink>
)


            
        