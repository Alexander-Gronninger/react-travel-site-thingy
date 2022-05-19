/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CardOneThird from "./components/CardOneThird";
import CardCategory from "./components/CardCategory";
import CardHeading from "./components/CardHeading";
import CardText from "./components/CardText";

function App() {
  const styles = {
    wrapper: css`
      background-color: lightgray;
      max-width: 1280px;
      margin: 0 auto;
    `,
  };
  return (
    <div css={styles.wrapper}>
      <CardOneThird
        CardOneThirTest="PROP TEST"
        CardCategory={
          <CardCategory
            CardCategoryColor="blue"
            CardCategoryContent="CATEGORY"
          />
        }
        CardHeading={
          <CardHeading CardHeadingColor="blue" CardHeadingContent="HEADING" />
        }
        CardText={<CardText CardTextColor="blue" CardTextContent="TEXT" />}
      />
    </div>
  );
}

export default App;
