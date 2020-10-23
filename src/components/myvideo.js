import React from "react"

const Myvideo = () => {
  return (
    <section id="video">
      <h1>Lets see what her friends and family have to say about her...</h1>
      <div className="video-container">
        <iframe
          allowFullScreen
          className="video-iframe"
          src="https://jobirthday.s3.amazonaws.com/Jordaans+Birthday.m4v"
        ></iframe>
      </div>
    </section>
  )
}

export default Myvideo
