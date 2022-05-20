/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Card = (props) => {
  const style = {
    Card: css`
      background-color: white;
      margin: 10px;
      border-radius: 10px;
      grid-column: ${props.gridcolumn || "auto"};
      grid-row: ${props.gridrow || "auto"};
      display: ${props.display || "block"};
      grid-template-columns: ${props.gridtemplatecolumns || "auto"};
      grid-template-rows: ${props.gridtemplaterows || "auto"};
    `,
  };

  return (
    <>
      <article css={style.Card}>
        {props.CardImage}
        {props.CardCategory}
        {props.CardHeading}
        {props.CardText}
      </article>
    </>
  );
};

export default Card;
