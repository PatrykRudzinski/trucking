const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulOffer{
              edges {
                node {
                  title
                  desc
                  order
                }
              }
            }
            allContentfulArticle{
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
          
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
      })
    )
  })
}