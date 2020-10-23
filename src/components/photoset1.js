import React from "react"

const Photoset1 = () => {
  const set1 = [
    {
      id: "1",
      src: "https://jobirthday.s3.amazonaws.com/Jo1.jpg",
    },
    {
      id: "1",
      src: "https://jobirthday.s3.amazonaws.com/friends25.jpg",
    },
    {
      id: "2",
      src: "https://jobirthday.s3.amazonaws.com/Jo2.jpg",
    },
    {
      id: "3",
      src: "https://jobirthday.s3.amazonaws.com/Jo3.jpg",
    },
    {
      id: "4",
      src: "https://jobirthday.s3.amazonaws.com/Jo4.jpg",
    },
    {
      id: "5",
      src: "https://jobirthday.s3.amazonaws.com/Jo5.jpg",
    },
    {
      id: "6",
      src: "https://jobirthday.s3.amazonaws.com/Jo6.jpg",
    },

    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/Jo8.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/joo7.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/joo6.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/joo2.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/joo3.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/joo5.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/joo1.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/joo4.jpg",
    },
  ]
  return (
    <section>
      <h1>Jordaan E. Scott</h1>

      <div className="photo-container">
        {set1.map(data => (
          <div
            className="photo"
            data-sal="slide-up"
            data-sal-easing="ease-out-bounce"
            data-sal-duration="200"
          >
            <img src={data.src} alt={data.id} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Photoset1
