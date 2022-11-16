import styled from "styled-components";
import { FlexBox } from "../../App.Styles";

export const OrderWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    color: #1E1009;
    width: 30%;
`

export const TotalPrice = styled("div")`
    display: flex;
    color: #1E1009;
    font-weight: bold;
    border-top: 1px solid #CCCCCC36;
    border-bottom: 1px solid #CCCCCC36;
    padding: 10px 0;
    font-weight: bold;
    justify-content: space-between;
    margin: 10px 0;
    padding: 15px 0;
`
export const OrderDetailsItem = styled(FlexBox)`
padding: 5px 0;
`;