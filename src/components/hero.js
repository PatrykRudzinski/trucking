// import React from 'react'
// import Img from 'gatsby-image'

// import styles from './hero.module.css'

// export default ({ data }) => (
//   <div className={styles.hero}>
//     <Img className={styles.heroImage} alt={data.name} sizes={data.heroImage.sizes} />
//     <div className={styles.heroDetails}>
//       <h3 className={styles.heroHeadline}>{data.name}</h3>
//       <p className={styles.heroTitle}>{data.title}</p>
//       <p>{data.shortBio.shortBio}</p>
//     </div>
//   </div>
// )

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


export default (props) => (
        <section>
            <Slider/>
            <Articles>
                <FlexContainer>
                    {props.data.map( e => {
                        return <Article key={e.node.order}>
                            <h4>{e.node.title}</h4>
                            <p>{e.node.summary}</p>

                        </Article>
                    })}
                </FlexContainer>
                <Button>View details</Button>
            </Articles>
        </section>
)
