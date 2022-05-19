/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CardOneThird from "./components/CardOneThird";
import CardTwoThirds from "./components/CardTwoThirds";

import CardCategory from "./components/CardCategory";
import CardHeading from "./components/CardHeading";
import CardText from "./components/CardText";
import CardImage from "./components/CardImage";

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
    <div css={styles.wrapper}>
      <CardOneThird
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
      <CardTwoThirds
        CardImage={
          <CardImage
            CardImageContent={ImagePlaceholderURL + "280/300"}
            borderradius="10px"
            margin="35px"
          />
        }
        test="proptest"
        gridcolumn="2 / 3"
      />
    </div>
  );
}

export default App;
