/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardImage = (props) => {
  const style = {
    CardImage: css`
      height: ${props.height || "auto"};
      width: ${props.width || "auto"};
      border-radius: ${props.borderradius || "auto"};
      margin: ${props.margin || 0};
      display: ${props.display || "block"};
      grid-column: ${props.gridcolumn || "auto"};
      grid-row: ${props.gridrow || "auto"};
    `,
  };
  return (
    <>
      <img
        css={style.CardImage}
        alt="placeholder"
        src={props.CardImageContent}
      ></img>
    </>
  );
};

export default CardImage;
