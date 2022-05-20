/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardCategory = (props) => {
  const styles = {
    CardCategory: css`
      color: ${props.color || "black"};
      font-size: ${props.fontsize || "initial"};
      font-weight: ${props.fontweight || "initial"};
      background-color: ${props.backgroundcolor || "unset"};
      margin: ${props.margin || 0};
      grid-column: ${props.gridcolumn || "auto"};
      grid-row: ${props.gridrow || "auto"};
    `,
  };
  return (
    <>
      <p css={styles.CardCategory}>{props.CardCategoryContent}</p>
    </>
  );
};

export default CardCategory;
