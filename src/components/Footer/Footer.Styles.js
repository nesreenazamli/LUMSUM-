import styled from "styled-components";
import { FlexBox,  Typography } from "../../App.Styles";
import { Image } from "../OrderCard/Order.Styles";

export const FooterWrapper = styled(FlexBox)`
  background-color: #2d988f;
  color: #fff;
  justify-content: space-between;
  padding:35px 40px;
`;

export const FooterSection = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: #2d988f;
  color: #fff;
  width: 20%;
  font-size: 14px;
`;
export const FooterList = styled("ul")`
  list-style: none;
`;
export const FooterListItem = styled("ul")`
  margin-top: 18px;
`;
export const FooterButton = styled("button")`
  font-size: 14px;
  color: #fff;
  background-color: #1e1009;
  padding: 10px 0;
  margin: 10px 0;
  border-radius: 6px;
`;
export const FooterLogoImage = styled(Image)`
  width: 60px;
`;
export const FooterIcons = styled("div")`
  display: flex;
  margin-top: 20px;
`;
export const FooterIcon = styled("div")`
  background: #fff;
  padding: 4px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Footerborder = styled("div")`
  width: fit-content;
`;
export const FooterTypography = styled(Typography)`
  width: fit-content;
  border-bottom: 2px solid #fff;
  padding: 15px 0 ;
`;
export const SubFooter = styled("div")`
color:#261912;
height: 20px;
font-size:14px;
text-align: center;
padding:16px 0;
margin-bottom:16px
`;

export const FooterImageWrapper= styled(FlexBox)`
margin-top: 30px;
`