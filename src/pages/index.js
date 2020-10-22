import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//components
import Hero from "../components/hero"
import Footer from "../components/footer"

//STYLES
import "../base.css"
import "../style.scss"

const HomeIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Happy Birthday Jordaan!" />
      <Hero />
    </Layout>
  )
}

export default HomeIndex
