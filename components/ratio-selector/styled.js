import styled, { css } from "styled-components";

import colors from "constants/colors";

export const Wrapper = styled(`div`)`
  display: flex:
  align-items: center;
`;

export const Button = styled(`div`)`
  padding: 10px 30px;
  background: ${colors.white};
  cursor: pointer;
  border-radius: 10px;
  margin-right: 10px;
  color: ${colors.skyBlueTwo};
  border: 1px solid ${colors.skyBlueTwo};
  margin-bottom: 1em;

  ${({ selected }) =>
    selected &&
    css`
      background: ${colors.skyBlueTwo};
      color: ${colors.white};
    `}

  ${({ last }) =>
    last &&
    css`
      margin-right: 0;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;
