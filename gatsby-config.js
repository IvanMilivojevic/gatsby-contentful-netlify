/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "GatsbyJS tutorial",
    description: "Intro to GatsbyJS",
    author: "@IvanMilivojevic",
    person: { name: "Ivan", surname: "Milivojevic", age: 32 },
    siteUrl: `https://gatsby-ivcha.netlify.app/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        // 1 query for each data type
        query: `
          {
            allContentfulBlogPost {
              edges {
                node {
                  id
                  slug
                  updated_at: updatedAt
                }
              }
            },
            allContentfulProduct {
              edges {
                node {
                  id
                  slug
                  updated_at: updatedAt
                }
              }
            }
          }
        `,
        mapping: {
          allContentfulBlogPost: {
            sitemap: `separate`,
          },
          allContentfulProduct: {
            sitemap: `separate`,
          },
        },
        exclude: [`/dev-404-page`, `/404`, `/404.html`, `/offline-plugin-app-shell-fallback`],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
  ],
}
