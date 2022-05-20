/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardHeading = (props) => {
  const styles = {
    CardHeading: css`
      color: ${props.color || "black"};
      font-size: ${props.fontsize || "initial"};
      font-weight: ${props.fontweight || "initial"};
      line-height: ${props.lineheight || "initial"};
      margin: ${props.margin || 0};
      grid-column: ${props.gridcolumn || "auto"};
      grid-row: ${props.gridrow || "auto"};
    `,
  };
  return (
    <>
      <h2 css={styles.CardHeading}>{props.CardHeadingContent}</h2>
    </>
  );
};

export default CardHeading;
