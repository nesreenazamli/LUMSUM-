import styled from "styled-components";

export const Image = styled.img`
  border-radius: 6px;
  object-fit: cover;
`;

export const OrderCards = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc36;
  padding: 10px 0;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  cursor: pointer;
  background: #f1f1f1;
  font-weight: bold;
  font-size: 20px;
  color: #003539;
  margin: 50px auto;
  &:hover {
    background: #003539;
    color: #f1f1f1;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  background: "#F5F5F5";
  border-radius: "4px";
  background: #f5f5f5;
  width: 150px;
  height: 35px;
  padding: 22px 0;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 15%;
`;
