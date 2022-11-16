import styled from "styled-components";
import { FlexBox, InnerSection } from "../../App.Styles";

export const PrivacyPolicyWrapper = styled("div")`
  display: flex;
`;

export const ProceedWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  width: 100%;
  padding-right: 100px;
`;

export const OrderCardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const NavigatorContainer = styled(FlexBox)`
  height: 50px;
  width: 100%;
  margin-top: 10px;
`;

export const NavigatorInnerContainer = styled(InnerSection)`
  justify-content: start;
  width: 100%;
  flex-direction: row;
`;

export const NavigatorSpan = styled.div`
  font-size: 14px;
  margin-left: 8px;
  color: #1e1009;
  display: flex;
  justify-content: start;
  align-items: start;
  cursor: pointer;
`;
export const NavigatorSpanActive = styled(NavigatorSpan)`
  font-weight: bold;
`;

export const PageTitle = styled("h1")`
  color: #1e1009;
  border-bottom: 1px solid #cccccc36;
  margin-bottom: 20px;
  font-size: 26px;
`;

export const SummeryTitle = styled("h2")`
  color: #1e1009;
  margin-bottom: 10px;
  font-size: 20px;
`;
