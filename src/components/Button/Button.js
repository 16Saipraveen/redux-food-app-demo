import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.bgColor ? 'green' : 'orange')}
  border-radius: 50px;
  padding: 18px 48px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid blue;
  color: yellow;
`;

function Button() {
  const [bgColor, setButtonBg] = useState(false);
  return <StyledButton onClick={() => setButtonBg(true)} >Button</StyledButton>;
}

export default Button;
