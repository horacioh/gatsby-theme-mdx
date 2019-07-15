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
