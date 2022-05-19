/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardText = (props) => {
  console.log("her:" + props);
  const styles = {
    CardText: css`
      color: ${props.color || "black"};
    `,
  };
  return (
    <>
      <p css={styles.CardText}>{props.CardTextContent}</p>
    </>
  );
};

export default CardText;
