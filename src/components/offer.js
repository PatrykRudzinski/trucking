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
const icons = [
    'contract',
    'freight',
    'storage',
    'consulting',
]

export default (props) => (
    <section>
        <Container>
            <Header>
                <h2>What we Offer</h2>
                <h3>Tailored logistics services</h3>
            </Header>
            <OfferArticles>
            {props.data.map( (e, i) => {
                        return <OfferArticle key={e.node.order} icon={icons[i]}>
                            <h4>{e.node.title}</h4>
                            <p>{e.node.desc.desc}</p>
                        </OfferArticle>
                    })}
            </OfferArticles>
        </Container>
    </section>
)
