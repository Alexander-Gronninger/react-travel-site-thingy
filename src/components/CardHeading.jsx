/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardHeading = (props) => {
  const stlyes = {
    CardHeading: css`
      ${props.CardHeadingFontSize || "20"}
      ${props.CardHeadingColor || "black"}
    `,
  };
  return (
    <>
      <h2 css={stlyes.CardHeading}>{props.CardHeadingContent}</h2>
    </>
  );
};

export default CardHeading;
