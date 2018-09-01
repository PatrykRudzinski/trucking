import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div style={{ background: '#fff' }}>
        
      </div>
    )
  }
}

export default BlogIndex

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulSizes_withWebp
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//   }
// `
