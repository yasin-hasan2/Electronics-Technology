import { Carousel } from "react-carousel-minimal";

function Banner() {
  const data = [
    {
      image: "https://i.ibb.co/j83Z2wP/Google-Pixel-7-A-Gear-DSC-5259.jpg",
      caption: "Google Pixel",
    },
    {
      image: "https://i.ibb.co/y5hNdH2/Caviar-i-Phone-12-Pro-Jobs-4-Gold.jpg",
      caption: "I Phone 12 Gold",
    },
    {
      image: "https://i.ibb.co/xXd3hjR/sony-3.jpg",
      caption: "Sony Xperia 3",
    },
    {
      image: "https://i.ibb.co/MV8vrFD/intel-1.png",
      caption: "Intel Future-V",
    },
    {
      image: "https://i.ibb.co/QKF6mmP/google-pixel-6-4.jpg",
      caption: "Google",
    },
    {
      image: "https://i.ibb.co/fkYVTMY/Galaxy-A13-1.jpg",
      caption: "Samsung Galaxy ",
    },
    {
      image:
        "https://i.ibb.co/PWYHj8c/Best-i-Phone-Guide-September-2023-Gear.jpg",
      caption: "I Phone",
    },
    {
      image: "https://i.ibb.co/gmL5bM1/Upcoming-Samsung-mobile-phones.jpg",
      caption: "Samsung",
    },
    {
      image: "https://i.ibb.co/kMrsvX9/8-RX8ud-QF4-Gf-BPN2-TRZy3id.jpg",
      caption: "Sony",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  //   const thumbnailsStyle = {
  //     justifyContent: "center",
  //   };
  //   const slideNumberStyle = {
  //     fontSize: "20px",
  //     fontWeight: "bold",
  //   };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 0px",
          }}
        >
          <Carousel
            data={data}
            time={4000}
            width="1200px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailsStyle={thumbnailsStyle}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1200px",
              maxHeight: "700px",
              margin: "20px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
