import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../layouts/Layout"
import { AddCart } from "../components/styled/buttons"
import styles from "../layouts/styles/product-detail.module.css"

const ProductDetail = ({ data }) => {
  const {
    product: {
      description: { description },
      image: { fluid, title: productImageTitle },
      price,
      title,
    },
  } = data

  return (
    <Layout>
      <div className={styles.productSingleWrapper}>
        <Link to="/products/" className={styles.backLink}>
          Back to Products
        </Link>
        <section className={styles.productSingle}>
          <div className={styles.productImage}>
            <Image fluid={fluid} alt={productImageTitle} />
          </div>
          <div className={styles.productInfo}>
            <h1>{title}</h1>
            <div>{description}</div>
            <div className={styles.productPrice}>{price}</div>
            <AddCart>Add to Cart</AddCart>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        title
      }
      price
      title
    }
  }
`

export default ProductDetail
