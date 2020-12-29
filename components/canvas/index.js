import React, { memo } from "react";

import { Wrapper } from "./styled";

const Canvas = ({ canvasEle, hide }) => {
  return (
    <Wrapper hide={hide}>
      <canvas ref={canvasEle} className={"selfie-canvas"} />
    </Wrapper>
  );
};

export default memo(Canvas);
