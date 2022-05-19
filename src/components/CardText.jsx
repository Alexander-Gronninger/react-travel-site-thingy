/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardText = (props) => {
  const styles = {
    CardText: css`
      color: ${props.color || "black"};
      font-size: ${props.fontsize || "initial"};
      font-weight: ${props.fontweight || "initial"};
      margin: ${props.margin || 0};
    `,
  };
  return (
    <>
      <p css={styles.CardText}>{props.CardTextContent}</p>
    </>
  );
};

export default CardText;
