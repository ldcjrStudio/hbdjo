import React from "react"
import { Link } from "gatsby"

//components
import Footer from "../components/footer"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        {" "}
        <h1>Happy Birthday Jordaan!</h1>
      </header>
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
