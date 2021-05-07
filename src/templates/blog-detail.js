import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../layouts/Layout"
import styles from "../layouts/styles/product-detail.module.css"

const BlogDetail = ({ data }) => {
  const {
    blog: {
      title,
      content,
      image: { fluid, title: blogImageTitle },
    },
  } = data

  return (
    <Layout>
      <div className={styles.productSingleWrapper}>
        <Link to="/blog/" className={styles.backLink}>
          Back to Blog Listing
        </Link>
        <section className={styles.productSingle}>
          <div className={styles.productImage}>
            <Image fluid={fluid} alt={blogImageTitle} />
          </div>
          <div className={styles.productInfo}>
            <h1>{title}</h1>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetBlogPost($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      title
      content {
        raw
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        title
      }
    }
  }
`

export default BlogDetail
