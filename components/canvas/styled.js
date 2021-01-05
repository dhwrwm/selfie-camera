import styled, { css } from "styled-components";

import colors from "constants/colors";

export const Wrapper = styled(`div`)`
  border: 2px solid ${colors.skyBlueThree};
  margin-bottom: 2rem;
  overflow: hidden;
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
