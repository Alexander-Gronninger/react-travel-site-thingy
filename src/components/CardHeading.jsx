/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardHeading = (props) => {
  console.log(props);
  const styles = {
    CardHeading: css`
      color: ${props.color || "black"};
      font-size: ${props.fontsize || "initial"};
      font-weight: ${props.fontweight || "initial"};
      margin: ${props.margin || 0};
    `,
  };
  return (
    <>
      <h2 css={styles.CardHeading}>{props.CardHeadingContent}</h2>
    </>
  );
};

export default CardHeading;
