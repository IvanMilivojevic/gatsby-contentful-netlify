import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        info: siteMetadata {
          title
          description
          author
          data
          person {
            name
            surname
            age
          }
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <nav className={styles.topNav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/products/">Products</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.userHeader}>{data.site.info.person.name}</div>
    </header>
  )
}

export default Header
