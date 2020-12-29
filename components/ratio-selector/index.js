import React, { memo } from "react";

import { FOUR_BY_THREE, SIXTEEN_BY_NINE, SQUARE } from "constants/index";
import { Wrapper, Button } from "./styled";

const RatioSelector = ({ selected, onSelect }) => {
  return (
    <Wrapper>
      <Button
        selected={selected === FOUR_BY_THREE}
        onClick={() => onSelect(FOUR_BY_THREE)}
      >
        4:3
      </Button>
      <Button
        selected={selected === SIXTEEN_BY_NINE}
        onClick={() => onSelect(SIXTEEN_BY_NINE)}
      >
        16:9
      </Button>
      <Button selected={selected === SQUARE} onClick={() => onSelect(SQUARE)}>
        1:1
      </Button>
      <Button disabled last>
        Custom
      </Button>
    </Wrapper>
  );
};

export default memo(RatioSelector);
