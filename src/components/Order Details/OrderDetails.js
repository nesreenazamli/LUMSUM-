import React from "react";
import {  Typography } from "../../App.Styles";
import { OrderDetailsItem, OrderWrapper, TotalPrice } from "./OrderDetails.styles";

export default function OrderDetails({ subtotal, discount, fee, Total }) {
  return (
    <OrderWrapper>
      <Typography fontWeight={600} fontSize={20}>
        Order Details
      </Typography>
      <OrderDetailsItem>
        <Typography>Subtotal</Typography>
        <Typography>{subtotal}</Typography>
      </OrderDetailsItem>
      <OrderDetailsItem>
        <Typography>Discount</Typography>
        <Typography>{discount}</Typography>
      </OrderDetailsItem>
      <OrderDetailsItem>
        <Typography>Delivery Fee</Typography>
        <Typography>{fee}</Typography>
      </OrderDetailsItem>

      <TotalPrice>
        <Typography>Grand Total</Typography>
        <Typography>{Total}</Typography>
      </TotalPrice>
    </OrderWrapper>
  );
}
