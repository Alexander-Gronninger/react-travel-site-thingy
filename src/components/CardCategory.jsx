/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardCategory = (props) => {
  const styles = {
    CardCategory: css`
      color: ${props.CardCategoryColor || "black"};
      background-color: ${props.CardBackgroundColor || "unset"};
      font-size: ${props.CardCategoryFontsize || "medium"};
    `,
  };
  return (
    <>
      <p css={styles.CardCategory}>{props.CardCategoryContent}</p>
    </>
  );
};

export default CardCategory;
