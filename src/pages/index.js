import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import { PrimaryButton } from "../components/styled/buttons"

const Home = ({ data }) => {
  return (
    <Layout>
      <div>Total number of images found: {data.allFile.totalCount}</div>
      <div>Total number of images found locally: {data.allFile.totalCount}</div>
      <PrimaryButton>Call to Action</PrimaryButton>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      totalCount
      nodes {
        size
        absolutePath
        relativePath
      }
    }
    file(relativePath: { eq: "elephants/elephant.jpg" }) {
      size
      relativePath
    }
  }
`

export default Home
