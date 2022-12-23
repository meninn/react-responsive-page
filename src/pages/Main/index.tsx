import React, { useRef } from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import NewsBox from "../../components/NewsBox";

import imageOne from "../../images/png/image-news-1.png";
import imageTwo from "../../images/png/image-news-2.png";

import image1 from "../../images/png/img-1.png";
import image2 from "../../images/png/img-2.png";
import image3 from "../../images/png/img-3.png";
import image4 from "../../images/png/img-4.png";

import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

import NewsBoxInterface from "../../interfaces/NewsBoxInterface";
import CardInterface from "../../interfaces/CardInterface";

import "./styles.scss";

const thirdSectionData: NewsBoxInterface[] = [
  {
    tagText: "Lorem morbi",
    variant: "tag-1",
    text: "Vestibulum nec tempor elit. Duis porta quam mauris, id dapibus urna laoreet eu. Duis quis dapibus leo, non iaculis felis.",
    date: "May 27, 2021",
  },
  {
    tagText: "Lorems",
    variant: "tag-2",
    text: "Cras non tempus nisi. Suspendisse vestibulum nisi sed feugiat viverra.",
    date: "May 21, 2021",
    img: imageOne,
  },
  {
    tagText: "Lorems",
    variant: "tag-2",
    text: "Nulla porttitor eros nisi, ut semper nunc sagittis vel. Nulla nec tellus sagittis, pulvinar tortor id.",
    date: "May 24, 2021",
    img: imageTwo,
  },
  {
    tagText: "Lorem morbi",
    variant: "tag-1",
    text: "Praesent tristique augue et urna aliquam, non pellentesque neque tincidunt aliquam finibus urna et consectetur",
    date: "May 24, 2021",
  },
];

const fourthSectionData: CardInterface[] = [
  {
    header: "Nulla porttitor",
    text: "Orci varius natoque penatibus",
    img: image1,
  },
  {
    header: "Donec scelerisque",
    text: "Vestibulum nec tempor elit porta quam mauris",
    img: image2,
  },
  {
    header: "Duis eget tempus",
    text: "Duis quis dapibus leo, non iaculis felis",
    img: image3,
  },
  {
    header: "Donec scelerisque",
    text: "Maecenas non ligula quis turpis",
    img: image4,
  },
];

function Main() {
  return (
    <div className="container">
      <section className="first-section" id="first">
        <Header />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button text="Lorem ipsum dolor" variant="btn-1" />
      </section>
      <section className="second-section">
        <h1>Fusce tempus, tellus eget lobortis gravida.</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <Button text="Lorem ipsum dolor" variant="btn-2" />
      </section>
      <section className="third-section">
        <h1>Lorem ipsum dolor</h1>
        <div className="news">
          {thirdSectionData.map(({ tagText, variant, text, date, img }) => (
            <NewsBox
              tagText={tagText}
              variant={variant}
              text={text}
              date={date}
              img={img}
            />
          ))}
        </div>
      </section>
      <section className="fourth-section">
        <h1>Quisque</h1>
        <Carousel data={fourthSectionData} />
      </section>
      <Footer />
    </div>
  );
}

export default Main;
