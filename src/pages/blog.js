import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../layouts/Layout"
import styles from "../layouts/styles/products-page.module.css"

const Blog = ({ data }) => {
  const {
    allContentfulBlogPost: { nodes: posts },
  } = data

  return (
    <Layout>
      <div className={styles.productsWrapper}>
        <div className={styles.productsHeading}>
          <h1>Blog list</h1>
        </div>
        <div className={styles.productsList}>
          {posts.map(post => (
            <div className={styles.productSingle} key={post.id}>
              <Image fluid={post.image.fluid} alt={post.image.title} />
              <div className={styles.productInfo}>
                <h2>{post.title}</h2>
                <div>{post.description.description}</div>
                <Link to={post.slug}>More details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        id
        slug
        title
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
          title
        }
      }
    }
  }
`

export default Blog
