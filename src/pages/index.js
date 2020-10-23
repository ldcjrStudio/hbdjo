import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

//components
import Hero from "../components/hero"
import Footer from "../components/footer"
import About from "../components/about"

//STYLES
import "../base.css"
import "../style.scss"
import Photoset1 from "../components/photos1"

const HomeIndex = ({ location }) => {
  return (
    <Layout location={location}>
      {/* <SEO title="Happy Birthday Jordaan!" /> */}
      <Hero />
      <About />
      <Photoset1 />
    </Layout>
  )
}

export default HomeIndex
