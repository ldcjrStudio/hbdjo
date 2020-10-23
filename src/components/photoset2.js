import React from "react"

const Photoset2 = () => {
  const set1 = [
    {
      id: "2",
      src: "https://jobirthday.s3.amazonaws.com/friends2.jpg",
    },
    {
      id: "3",
      src: "https://jobirthday.s3.amazonaws.com/friends3.jpg",
    },
    {
      id: "4",
      src: "https://jobirthday.s3.amazonaws.com/friends4.jpg",
    },
    {
      id: "5",
      src: "https://jobirthday.s3.amazonaws.com/friends5.jpg",
    },
    {
      id: "6",
      src: "https://jobirthday.s3.amazonaws.com/friends6.jpg",
    },
    {
      id: "7",
      src: "https://jobirthday.s3.amazonaws.com/friends7.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/friends8.jpg",
    },
    {
      id: "1",
      src: "https://jobirthday.s3.amazonaws.com/friends9.jpg",
    },
    {
      id: "2",
      src: "https://jobirthday.s3.amazonaws.com/friends10.jpg",
    },

    {
      id: "4",
      src: "https://jobirthday.s3.amazonaws.com/friends12.jpg",
    },
    {
      id: "5",
      src: "https://jobirthday.s3.amazonaws.com/friends13.jpg",
    },
    {
      id: "6",
      src: "https://jobirthday.s3.amazonaws.com/friends14.jpg",
    },

    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/friends16.jpg",
    },
    {
      id: "1",
      src: "https://jobirthday.s3.amazonaws.com/friends17.jpg",
    },
    {
      id: "2",
      src: "https://jobirthday.s3.amazonaws.com/friends18.jpg",
    },
    {
      id: "3",
      src: "https://jobirthday.s3.amazonaws.com/friends19.jpg",
    },
    {
      id: "4",
      src: "https://jobirthday.s3.amazonaws.com/friends20.jpg",
    },
    {
      id: "5",
      src: "https://jobirthday.s3.amazonaws.com/friends21.jpg",
    },
    {
      id: "6",
      src: "https://jobirthday.s3.amazonaws.com/friends22.jpg",
    },
    {
      id: "7",
      src: "https://jobirthday.s3.amazonaws.com/friends23.jpg",
    },
    {
      id: "8",
      src: "https://jobirthday.s3.amazonaws.com/friends24.jpg",
    },

    {
      id: "8",
      src: "  https://jobirthday.s3.amazonaws.com/friendss1.jpg",
    },
    {
      id: "8",
      src: "  https://jobirthday.s3.amazonaws.com/friendss4.jpg",
    },
    {
      id: "8",
      src: "  https://jobirthday.s3.amazonaws.com/friendss2.jpg",
    },
  ]
  return (
    <section>
      <h1>Jordaan & Friends</h1>

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

export default Photoset2
