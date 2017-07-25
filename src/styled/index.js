import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  margin: 10px 0;
`;

export const StyledSlider = styled.input.attrs({
  type: 'range'
})`
  display: block;
  margin: 10px 0;
  width: 100px;
`;
