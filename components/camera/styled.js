import styled, { css } from "styled-components";

import colors from "constants/colors";
import { FOUR_BY_THREE, SIXTEEN_BY_NINE, SQUARE } from "constants/index";

export const Wrapper = styled(`div`)`
  border: 2px solid ${colors.skyBlue};
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  ${({ selected }) =>
    selected &&
    selected === FOUR_BY_THREE &&
    css`
      width: 467px;
      height: 350px;
    `}
  ${({ selected }) =>
    selected &&
    selected === SIXTEEN_BY_NINE &&
    css`
      width: 622px;
      height: 350px;
    `}
  ${({ selected }) =>
    selected &&
    selected === SQUARE &&
    css`
      width: 350px;
      height: 350px;
    `}
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius}%;
    `}
`;

export const Video = styled(`video`)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
`;

export const MessageBox = styled(`div`)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled("p")`
  font-size: 16px;
  color: ${colors.skyBlue};
`;
