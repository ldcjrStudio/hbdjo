import React from "react"
import Img from "gatsby-image"

const Hero = ({ data }) => {
  return (
    <section id="hero">
      <div className="container">
        <h1>
          Today, we celebrate <br></br>a Queen's Birthday.
        </h1>
        <div className="hero">
          <div
            className="pic"
            data-sal="slide-up"
            data-sal-easing="ease-out-bounce"
            data-sal-duration="500"
            data-sal-delay="250"
          >
            <img src="https://jobirthday.s3.amazonaws.com/1.jpeg" />
            <div className="jo">
              <h2>
                Jordaan E. <br></br>Scott
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
