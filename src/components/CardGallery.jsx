/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardGallery = ({
  props,
  CardCategory,
  CardHeading,
  CardText,
  CardImage,
}) => {
  const style = {
    CardGallery: css`
      grid-column: 1 / 3;
      display: grid;
    `,
  };
  return (
    <article css={style.CardGallery}>
      {CardImage}
      {CardCategory}
      {CardHeading}
      {CardText}
    </article>
  );
};

export default CardGallery;
