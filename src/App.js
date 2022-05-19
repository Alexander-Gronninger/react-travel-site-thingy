/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CardOneThird from "./components/CardOneThird";

function App() {
  const styles = {
    wrapper: css`
      background-color: lightgray;
      max-width: 1280px;
      margin: 0 auto;
    `,
  };
  return (
    <div css={styles.wrapper}>
      <CardOneThird />
    </div>
  );
}

export default App;
