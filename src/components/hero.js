import React from "react"

import mainpic from "../images/Jo/1.jpeg"

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h1>Today we celebrate a Queen's Birthday!</h1>
        <div className="hero">
          <img src={mainpic} />
          <div className="jo">
            <h2>Jordaan Scott</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
