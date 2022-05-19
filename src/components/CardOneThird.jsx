/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
/* import CardCategory from "./CardCategory";
import CardHeading from "./CardHeading";
import CardText from "./CardText"; */

const CardOneThird = ({ props, CardCategory, CardHeading, CardText }) => {
  console.log(props);
  const style = {
    CardOneThird: css`
      background-color: white;
    `,
  };

  return (
    <>
      <article css={style.CardOneThird}>
        {CardCategory}
        {CardHeading}
        {CardText}
      </article>
    </>
  );
};

export default CardOneThird;
