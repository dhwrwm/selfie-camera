import React, { memo } from "react";

import { Wrapper, Video, MessageBox, Message } from "./styled";

const Camera = ({
  VIDEO_EL_HEIGHT,
  VIDEO_EL_WIDTH,
  videoEle,
  selected = FOUR_BY_THREE,
  hide,
  isCamAllowed,
  borderRadius,
}) => {
  return (
    <Wrapper selected={selected} hide={hide} borderRadius={borderRadius}>
      <Video
        ref={videoEle}
        playsInline
        autoPlay
        height={VIDEO_EL_HEIGHT}
        width={VIDEO_EL_WIDTH}
      ></Video>
      {!isCamAllowed && (
        <MessageBox>
          <Message>Please allow camera</Message>
        </MessageBox>
      )}
    </Wrapper>
  );
};

export default memo(Camera);
