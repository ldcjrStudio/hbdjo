import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

//components
import Hero from "../components/hero"
import Footer from "../components/footer"
import About from "../components/about"
import Last from "../components/last"

//STYLES
import "../base.css"
import "../style.scss"
import Photoset1 from "../components/photoset1"
import Photoset3 from "../components/photoset3"
import Photoset2 from "../components/photoset2"
import Myvideo from "../components/myvideo"

const HomeIndex = ({ location }) => {
  return (
    <Layout location={location}>
      {/* <SEO title="Happy Birthday Jordaan!" /> */}
      <Hero />
      <About />
      {/* <Myvideo /> */}
      <Photoset3 />
      <Photoset2 />
      <Photoset1 />

      <Last />
    </Layout>
  )
}

export default HomeIndex
