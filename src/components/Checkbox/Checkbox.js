import React from "react";
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from "./Checkbox.Styles";



const Checkbox = ({ className, checked }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
