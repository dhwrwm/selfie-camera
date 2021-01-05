import React, { memo } from "react";

import { Wrapper } from "./styled";

const Canvas = ({ canvasEle, hide, borderRadius }) => {
  return (
    <Wrapper hide={hide} borderRadius={borderRadius}>
      <canvas ref={canvasEle} className={"selfie-canvas"} />
    </Wrapper>
  );
};

export default memo(Canvas);
