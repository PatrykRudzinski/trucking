import React from 'react'
import styled from 'styled-components'
import Slider from './hero/slider'
import Article from './hero/article'

const Articles = styled.section`
    background-color: #172837;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1140px;
`
const Button = styled.button`
    border: none;
    text-transform: uppercase;
    outline: none;
    color: #fff;
    cursor: pointer;
    background-color: #FFC600;
    margin: 50px 0;
    font-size: 13px;
    font-weight: 700;
    padding: 16px 63px;
    border-radius: 100px;
`


export default () => (
        <section>
            <Slider/>
            <Articles>
                <FlexContainer>
                    <Article active>
                        <h4>Overland network</h4>
                        <p>We have a wide experience in overland industry specific logistic solutions like farmaceutical logistics, retail and automotive logistics by train or road.</p>
                    </Article>
                    <Article >
                        <h4>Ocean freight</h4>
                        <p>We bring your goods safely to worldwide destinations with our great sea fright services. We offer LLC and FLC shipments that are fast and effective with no delays.
                        </p>
                    </Article>
                    <Article >
                        <h4>Air freight</h4>
                        <p>We provide full supply chain management package including cost effective and fast sea freight. You can also combine this package with other means of transportation.</p>
                    </Article>
                </FlexContainer>
                <Button>View details</Button>
            </Articles>
        </section>
)
