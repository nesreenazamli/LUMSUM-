import styled from "styled-components";

export const Typography = styled("p")`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  background: ${(props) => props.color};

  @media screen and (max-width: 1100px) {
    width: auto;
  }
`;


export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const InnerSection = styled(FlexColumn)`
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
`;
export const Input = styled("input")`
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  border: none;
  margin: 10px 0 0 0;

  &:focus {
    outline: none;
    border: none;
  }
  ::placeholder {
    font-size: 14px;
    color: #1e1009;
  }
`;
