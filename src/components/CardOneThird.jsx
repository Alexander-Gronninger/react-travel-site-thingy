/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardOneThird = ({
  props,
  CardCategory,
  CardHeading,
  CardText,
  CardImage,
}) => {
  console.log(props);
  const style = {
    CardOneThird: css`
      background-color: white;
      margin: 10px;
      border-radius: 10px;
      display: grid;
    `,
  };

  return (
    <>
      <article css={style.CardOneThird}>
        {CardImage}
        {CardCategory}
        {CardHeading}
        {CardText}
      </article>
    </>
  );
};

export default CardOneThird;
