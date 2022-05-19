/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardTwoThirds = ({
  props,
  CardCategory,
  CardHeading,
  CardText,
  CardImage,
}) => {
  console.log(props);
  const style = {
    CardTwoThirds: css`
      background-color: white;
      margin: 10px;
      border-radius: 10px;
      display: grid;
      grid-column: 2 / 4;
    `,
  };

  return (
    <>
      <article css={style.CardTwoThirds}>
        {CardImage}
        {CardCategory}
        {CardHeading}
        {CardText}
      </article>
    </>
  );
};

export default CardTwoThirds;
