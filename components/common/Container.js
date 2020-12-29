import styled from "styled-components";

import colors from "constants/colors";

const Container = styled(`div`)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${colors.background};
  min-height: 98vh;
`;

export default Container;
