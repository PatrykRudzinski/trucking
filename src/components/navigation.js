import React from 'react'
import styled from 'styled-components'

import Logo from './navigation/logo'
import Search from './navigation/search'
import MenuLink from './navigation/menuLink'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #FDFDFD;
  padding: 20px 22px 18px 22px;
  box-shadow: 0px -8px 0px 0px rgba(60,81,95,1);
  border-radius: 5px;
`

const Nav = styled.nav`
  display: flex;

    ul{
      list-style: none;
      display: flex;
    }
`

const menu = [
'Home',
'About us',
'Services',
'News',
'Locations',
'Contact'
]


export default () => (
  <Header>
      <Logo/>
      <Nav role="navigation">
          <ul>
              {menu.map( e => <MenuLink key={e}>{e}</MenuLink>)}
          </ul>
          <Search/>
      </Nav>
  </Header>
)


            
        