function GatsbyConfig(options) {
  const { contentPath = "pages" } = options
  return {
    plugins: [
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [".mdx", ".md"],
          remarkPlugins: [require("remark-slug"), require("remark-emoji")],
          defaultLayouts: {
            default: require.resolve("./src/components/Layout"),
          },
          gatsbyRemarkPlugins: [`gatsby-remark-prismjs`],
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: `${contentPath}`.replace(/\/\/+/g, "/"), // this replace here, is a neat technique i got from @jlengstorf (https://egghead.io/lessons/gatsby-set-up-to-create-data-driven-pages-in-gatsby)
          name: contentPath,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [`gatsby-remark-prismjs`],
        },
      },
      "gatsby-plugin-theme-ui",
    ],
  }
}

module.exports = GatsbyConfig
