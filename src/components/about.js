import React from "react"

import aboutimg from "../images/2.jpeg"

const About = () => {
  return (
    <section id="about">
      <div className="about">
        <h1>
          <img src="https://jobirthday.s3.amazonaws.com/2.jpeg" />
        </h1>
      </div>
      <div className="copy">
        <p>
          There's so much to say about Jordaan, where do we even start! To the
          naked eye, we can all see that she is truly stunning and carries
          herself with elegance. But her beauty isnt the only thing she is
          admired for. Jordaan is intelligent, ambitious, funny, caring, loving,
          kind, and she completely shifts the energy of any room she enters.
          I've heard some people say they felt purely BLESSED just to share the
          same presence with her. Anyways, I can go all day with this, but lets
          hear what her friends and family members have to say{" "}
          <a href="https://jobirthday.s3.amazonaws.com/Jordaans+Birthday.m4v">
            {" "}
            here.
          </a>
        </p>
      </div>
    </section>
  )
}

export default About
