import React from 'react'
import styled from "styled-components";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

const StyledToggleSwitchButton = styled.div`
& input {
  display: none;
}
& label{
  <BiMoon />

  &::before{
    background:#fff;
  }
}
`
const ToggleSwitchButton = React.forwardRef((props, ref) => {
  const { className, handleChange } = props;

  return (
    <StyledToggleSwitchButton className={className}>
      <input id='btn-mode' type="checkbox" onChange={handleChange} ref={ref} />
      <label htmlFor="btn-mode"><BiMoon size={30} /><FiSun size={30} /></label>
    </StyledToggleSwitchButton>
  );
});

export default ToggleSwitchButton
