import React, { memo } from "react";

import { Wrapper, Heading, Slider } from "./styled";

const BorderSelector = ({ onChange, borderRadius }) => {
  const onSlide = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <Wrapper>
      <Heading>Border Radius :</Heading>
      <Slider
        type="range"
        min="1"
        max="100"
        value={borderRadius}
        onChange={(event) => onSlide(event)}
      />
    </Wrapper>
  );
};

export default memo(BorderSelector);
