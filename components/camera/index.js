import React, { memo } from "react";

import { Wrapper, Video } from "./styled";

const Camera = ({
  VIDEO_EL_HEIGHT,
  VIDEO_EL_WIDTH,
  videoEle,
  selected = FOUR_BY_THREE,
  hide,
}) => {
  return (
    <Wrapper selected={selected} hide={hide}>
      <Video
        ref={videoEle}
        playsInline
        autoPlay
        height={VIDEO_EL_HEIGHT}
        width={VIDEO_EL_WIDTH}
      ></Video>
    </Wrapper>
  );
};

export default memo(Camera);
