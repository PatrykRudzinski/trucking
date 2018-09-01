import React from 'react'
import get from 'lodash/get'
import Hero from '../components/hero'
import Offer from '../components/offer'

class RootIndex extends React.Component {
  render() {   
    
    const articles = null || get(this, 'props.data.allContentfulArticle.edges')
    const offer = get(this, 'props.data.allContentfulOffer.edges')

    return (
        <div>
          <Hero data={articles}/>
          <Offer data={offer}/>
        </div>
    )
  }
}



export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulOffer(sort: { fields: [order], order: ASC}){
      edges {
        node {
          title
          desc
          order
        }
      }
    }
    allContentfulArticle(sort: { fields: [order], order: ASC}){
      edges {
        node {
          title
          summary
          order
        }
      }
    }
  }
`
