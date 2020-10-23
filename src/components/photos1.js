import React from "react"

const Photoset1 = () => {
  const set1 = [
    {
      id: "1",
      src: "https://jobirthday.s3.amazonaws.com/Jo1.jpg",
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
      id: "7",
      src: "https://jobirthday.s3.amazonaws.com/Jo7.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/Jo8.jpg",
    },
  ]
  return (
    <section>
      <h1>A queen</h1>

      <div className="photo-container">
        {set1.map(data => (
          <div className="photo">
            <img src={data.src} alt={data.id} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Photoset1
