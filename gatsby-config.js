module.exports = {
  siteMetadata: {
    title: `Happy Birthday Jordaan!`,
    author: {
      name: `Jordaan Scott`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `Today, we celebrate a Queen's birthday.`,
    siteUrl: `https://jordaanscott.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    // `gatsby-plugin-feed`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Happy Birthday Jordaan`,
        short_name: `HBD JO`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.35, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
  ],
}
