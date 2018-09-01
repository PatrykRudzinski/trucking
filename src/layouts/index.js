import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import Container from '../components/common/container'
import Navigation from '../components/navigation'

injectGlobal`
  @import url(‘https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:400,700,900');
 
  body {
    padding: 0;
    margin: 0;
    font-family: Raleway, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 0;
  }
`

const SectionNavigation = styled.section`
  position: absolute;
  width: 100%;
  top: 43px;
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
      <Helmet title={`Trucking`} />
      <SectionNavigation>
        <Container>
          <Navigation />
        </Container>
      </SectionNavigation>
      {children()}
      </div>
    )
  }
}

export default Template
