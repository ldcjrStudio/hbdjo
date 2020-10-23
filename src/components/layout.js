import React from "react"
import { Link } from "gatsby"

//components
import Footer from "../components/footer"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <header></header>
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
