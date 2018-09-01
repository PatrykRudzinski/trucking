import React from 'react'
import styled from 'styled-components'
import Container from './common/container'
import OfferArticle from './offer/offerArticle'

const Header = styled.header`
    padding-top: 67px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: 30px;
      }
    
      h3 {
        text-transform: uppercase;
        font-size: 12px;
        margin-top: 5px;
        position: relative;
    
        &::before {
          position: absolute;
          display: block;
          content: '';
          height: 2px;
          width: 29px;
          bottom:-12px;
          transform: translateX(-50%);
          left: 50%;
          background-color: #FFC600;
        }
      }
`

const OfferArticles = styled.section`
    margin-top: 38px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`


export default () => (
    <section>
        <Container>
            <Header>
                <h2>What we Offer</h2>
                <h3>Tailored logistics services</h3>
            </Header>
            <OfferArticles>
                <OfferArticle icon={'contract'}>
                    <h4>Contract logistics</h4>
                    <p>Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack!</p>
                </OfferArticle>
                <OfferArticle icon={'freight'}>
                    <h4>Overland, Ocean and Air Freight</h4>
                    <p>Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack!</p>
                </OfferArticle>
                <OfferArticle icon={'storage'}>
                    <h4>Warehousing and Storage</h4>
                    <p>Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack!</p>
                </OfferArticle>
                <OfferArticle icon={'consulting'}>
                    <h4>Consulting Services</h4>
                    <p>Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack!</p>
                </OfferArticle>
            </OfferArticles>
        </Container>
    </section>
)
