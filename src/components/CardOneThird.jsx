/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CardCategory from "./CardCategory";
import CardHeading from "./CardHeading";
import CardText from "./CardText";

const CardOneThird = (props) => {
  console.log(props);
  const style = {
    CardOneThird: css`
      background-color: white;
    `,
  };

  return (
    <>
      <article css={style.CardOneThird}>
        <CardCategory CardCategoryContent="CATEGORY" />
        <CardHeading CardHeadingContent="HEADING" />
        <CardText CardTextContent="TEXT" CardTextColor={props.CardTextColor} />
      </article>
    </>
  );
};

export default CardOneThird;
