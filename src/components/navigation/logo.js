import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Logo = styled(Link)`
    display: flex;
    text-decoration: none;

    img {
      max-height: 39px;
      max-width: 28px;
    }
    div {
      color: #000;
      margin-left: 10px;

      p:first-child {
        text-transform: uppercase;
        font-size: 26px;
        font-weight: 900;
      }
      p:last-child {
        font-size: 11px;
      }
    }

  }
`



export default () => (
      <Logo to='/'>
          <img src="./static/icons/logo.png" alt="Company Logo"/>
          <div>
              <p>Trucking</p>
              <p>Logistics & Transportation</p>
          </div>
      </Logo>
)


            
        