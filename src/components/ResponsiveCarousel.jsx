/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { Carousel } from "react-responsive-carousel";

const ResponsiveCarousel = (props) => {
  const style = {
    Carousel: css`
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
    <Carousel showArrows={props.showArrows}>
      {props.images.forEach((image) => {
        <div>
          <img src={image} alt="" />
        </div>;
      })}
    </Carousel>
  );
};

export default ResponsiveCarousel; /* 

const ResponsiveCarousel = React.createClass({
  render(props) {
    console.log(props);
    return <Carousel showArrows={true}></Carousel>;
  },
}); */
