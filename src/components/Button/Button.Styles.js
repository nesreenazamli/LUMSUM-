import styled from "styled-components"

export const CustomeButton=styled("button")`
    display: flex;
    justify-content: center;
    align-items:center;
    background: ${(props)=>props.background};
    color: ${(props) => props.color};
    width:${props=>props.width?props.width:"28%"};
    border-radius:6px;
    font-size:16px;
    cursor: pointer;
    border: 1px solid ${props=>props.border};
    padding: 16px 0;
    margin: 5px;
`;