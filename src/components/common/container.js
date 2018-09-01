import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  `

export default ({ children }) => (
  <Container>{children}</Container>
)
