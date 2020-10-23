import React from "react"

const Photoset3 = () => {
  const set1 = [
    {
      id: "1",
      src: "https://jobirthday.s3.amazonaws.com/fam1.jpg",
    },
    {
      id: "2",
      src: "https://jobirthday.s3.amazonaws.com/fam2.jpg",
    },
    {
      id: "3",
      src: "https://jobirthday.s3.amazonaws.com/fam3.jpg",
    },
    {
      id: "4",
      src: "https://jobirthday.s3.amazonaws.com/fam4.jpg",
    },
    {
      id: "5",
      src: "https://jobirthday.s3.amazonaws.com/fam5.jpg",
    },
    {
      id: "6",
      src: "https://jobirthday.s3.amazonaws.com/fam6.jpg",
    },
    {
      id: "7",
      src: "https://jobirthday.s3.amazonaws.com/fam7.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/fam8.jpg",
    },
    {
      id: "9",
      src: "https://jobirthday.s3.amazonaws.com/fam9.jpg",
    },
    {
      id: "10",
      src: "https://jobirthday.s3.amazonaws.com/fam10.jpg",
    },
    {
      id: "7",
      src: "https://jobirthday.s3.amazonaws.com/Jo7.jpg",
    },
  ]
  return (
    <section>
      <h1>Jordaan & Family</h1>

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

export default Photoset3
