/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "./components/Card";

import CardCategory from "./components/CardCategory";
import CardHeading from "./components/CardHeading";
import CardText from "./components/CardText";
import CardImage from "./components/CardImage";
import ResponsiveCarousel from "./components/ResponsiveCarousel";

//images
import GalleryImage1 from "../src/images/foggy_forest_road.jpg";
import GalleryImage2 from "../src/images/foggy_sea.jpg";
import GalleryImage3 from "../src/images/rails.jpg";

function App() {
  const styles = {
    wrapper: css`
      background-color: #eaeaea;
      max-width: 1280px;
      padding: 30px;
      margin: 0 auto;
      display: grid;
      grid-gap: 15px;
      grid-template-columns: 1fr 1fr 1fr;
    `,
  };
  const ImagePlaceholderURL = "https://picsum.photos/";

  return (
    <>
      <div css={styles.wrapper}>
        <Card
          gridcolumn="1 / 2"
          CardImage={
            <CardImage
              CardImageContent={ImagePlaceholderURL + "400/200"}
              borderradius="10px 10px 0 0"
            />
          }
          CardCategory={
            <CardCategory
              CardCategoryContent="TRAVEL"
              color="#37479d"
              fontsize="12px"
              margin="20px"
              fontweight="bold"
            />
          }
          CardHeading={
            <CardHeading
              CardHeadingContent="Surfing in Maldives"
              fontsize="24px"
              fontweight="bold"
              margin="0 20px"
            />
          }
          CardText={
            <CardText
              CardTextContent="Adipisicing mollit magna in consectetur dolore ad ipsum minim proident anim commodo cupidatat mollit veniam."
              margin="15px 20px 20px 20px"
            />
          }
        />
        <Card
          gridcolumn="2 / 4"
          CardImage={
            <CardImage
              CardImageContent={ImagePlaceholderURL + "280/300"}
              borderradius="10px"
              margin="35px"
            />
          }
        />
        <Card
          gridcolumn="1 / 3"
          display="grid"
          gridtemplatecolumns="1fr 1fr"
          /*         CardImage={
          <ResponsiveCarousel
            borderradius="10px"
            width="100%"
            gridcolumn="1 / 3"
            gridrow="1 / 5"
            images={[GalleryImage1, GalleryImage2, GalleryImage3]}
          />
        } */
          CardCategory={
            <CardCategory
              CardCategoryContent="THE NEW YORK TIMES"
              color="white"
              margin="20px 0 0 20px"
              gridcolumn="1 /2"
              gridrow="1 /2"
            />
          }
          CardHeading={
            <CardHeading
              CardHeadingContent="Must see places for summer"
              color="white"
              fontsize="40px"
              fontweight="bold"
              lineheight="30px"
              margin="150px 0 0 20px"
              gridcolumn="1 /2"
              gridrow="2 / 3"
            />
          }
          CardText={
            <CardText
              CardTextContent="Consequat enim aliquip anim quis duis enim qui cillum tempor irure aliqua amet qui."
              color="white"
              margin="10px 0 0 20px"
              gridcolumn="1 / 2"
              gridrow="3 / 4"
            />
          }
        />
      </div>
      <ResponsiveCarousel />
    </>
  );
}

export default App;
