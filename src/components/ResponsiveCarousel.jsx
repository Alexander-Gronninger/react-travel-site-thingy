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
    Test: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
  };
  return (
    <>
      <div style={style.Test}>
        <Carousel showArrows={true}>
          <div>
            <img src="../src/images/foggy_forest_road.jpg" alt="" />
          </div>
          <div>
            <img src="../src/images/foggy_sea.jpg" alt="" />
          </div>
          <div>
            <img src="../src/images/rails.jpg" alt="" />
          </div>
          {/* 
        {props.images.forEach((image) => {
        <div>
          <img src={image} alt="" />
        </div>;
      })} */}
        </Carousel>
      </div>
    </>
  );
};

export default ResponsiveCarousel;
