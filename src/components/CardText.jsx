/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardText = (props) => {
  console.log(props);
  const styles = {
    CardText: css`
      /* color: ${props.color || "black"}; */
    `,
  };
  return (
    <>
      <p>CARDTEXT TEST</p>
      {/* <p css={styles.CardText}>{props.CardTextContent}</p> */}
    </>
  );
};

export default CardText;
