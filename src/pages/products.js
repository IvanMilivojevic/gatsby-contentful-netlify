import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../layouts/Layout"
import styles from "../layouts/styles/products-page.module.css"

const Products = ({ data }) => {
  return (
    <Layout>
      <div className={styles.productsWrapper}>
        <div className={styles.productsHeading}>
          <h1>Products list</h1>
        </div>
        <div className={styles.productsList}>
          {data.allContentfulProduct.nodes.map(product => (
            <div className={styles.productSingle} key={product.id}>
              <Image fluid={product.image.fluid} alt={product.image.title} />
              <div className={styles.productInfo}>
                <h2>{product.title}</h2>
                <div className={styles.productPrice}>{product.price}</div>
                <Link to={product.slug}>More details</Link>
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
    allContentfulProduct {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
          title
        }
        price
        slug
        title
        id
      }
    }
  }
`

export default Products
