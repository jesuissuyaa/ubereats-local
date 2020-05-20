module.exports = {
  siteMetadata: {
    title: `Uber Eats対応の個人店まとめ`,
    description: `Uber Eatsで注文できる個人経営のお店を紹介するサイトです`,
    author: `@ubereats_local`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-circle.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "f965db1d-5df6-43d8-aaf3-925f431e7262",
        serviceId: "ubereats-local",
        endpoint: "articles",
        type: "article", // note: GraphQL types will be "microcmsArticle" & "allmMicrocmsArticle"
        // set offset
        query: {
          limit: 10,
        },
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "f965db1d-5df6-43d8-aaf3-925f431e7262",
        serviceId: "ubereats-local",
        endpoint: "food-genres",
        type: "foodGenre", // note: GraphQL types will be "microcmsArticle" & "allmMicrocmsArticle"
        // TEMP: needs to be fixed if more tags are added in the future
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "f965db1d-5df6-43d8-aaf3-925f431e7262",
        serviceId: "ubereats-local",
        endpoint: "cities",
        type: "city",
        // TEMP: needs to be fixed if more tags are added in the future
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "f965db1d-5df6-43d8-aaf3-925f431e7262",
        serviceId: "ubereats-local",
        endpoint: "stations",
        type: "station",
        // TEMP: needs to be fixed if more tags are added in the future
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "f965db1d-5df6-43d8-aaf3-925f431e7262",
        serviceId: "ubereats-local",
        endpoint: "prices",
        type: "price",
        // TEMP: needs to be fixed if more tags are added in the future
        query: {
          limit: 100,
        },
      },
    },
    "gatsby-plugin-chakra-ui",
  ],
}
