import React from 'react'
import styled from 'styled-components'
import Container from './../common/container'



const Slider = styled.section`
    min-height: 100vh;
    background-color: #082537;
    display: flex;
    align-items: center;
    
    h1 {
        font-size: 70px;
        line-height: 60px;
        letter-spacing: 1px;
        font-weight: 700;
        margin: 0;
        width: 50%;
        text-transform: uppercase;
        z-index: 1;
        position: relative;
        color: #fff;
  
        &::before {
          position: absolute;
          display: block;
          content: '';
          height: 4px;
          width: 66px;
          top: -20px;
          left: 3px;
          background-color: #FFC600;
        }
      }
`

export default () => (
            <Slider>
                <Container>
                    <h1>Strongest distribution network</h1>
                </Container>
            </Slider>
)
