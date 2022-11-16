import React, { useState } from "react";
import { FlexBox, Typography } from "../../App.Styles";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import OrderDetails from "../../components/Order Details/OrderDetails";
import OrderCard from "../../components/OrderCard/OrderCard";
import {
  NavigatorContainer,
  NavigatorInnerContainer,
  NavigatorSpan,
  NavigatorSpanActive,
  OrderCardWrapper,
  PageTitle,
  PrivacyPolicyWrapper,
  ProceedWrapper,
  SummeryTitle,
} from "./Checkout.Styles";

export default function Checkout() {
  const [checked, setChecked] = useState(false);
  const order = [
    {
      title: "Westron R-410A Refrigerant",
      category: "category",
      price: "AED 500",
    },
    {
      title: "Westron R-410A Refrigerant",
      category: "category",
      price: "AED 500",
    },
    {
      title: "Westron R-410A Refrigerant",
      category: "category",
      price: "AED 500",
    },
  ];
  return (
    <div>
      <NavigatorContainer>
        <NavigatorInnerContainer>
          <NavigatorSpan>Home</NavigatorSpan>
          <NavigatorSpan>/ My Cart</NavigatorSpan>
          <NavigatorSpanActive>/ Checkout</NavigatorSpanActive>
        </NavigatorInnerContainer>
      </NavigatorContainer>

      <PageTitle>Check out</PageTitle>
      <FlexBox>
        <OrderCardWrapper>
          <SummeryTitle>Order Summary</SummeryTitle>
          {order.map((item, index) => (
            <OrderCard
              key={index}
              title={item.title}
              category={item.category}
              price={item.price}
            />
          ))}
        </OrderCardWrapper>
        <OrderDetails
          subtotal={"AED 2500"}
          discount={"- AED 15"}
          fee={"AED 5"}
          Total={"AED 2490"}
        />
      </FlexBox>
      <ProceedWrapper>
        <PrivacyPolicyWrapper>
          <Checkbox
            checked={checked}
            onChange={() => setChecked((pre) => !pre)}
          />
          I agree to
          <Typography color="#2D988F" margin="0 5px">
            Terms of conditions
          </Typography>
          , and
          <Typography color="#2D988F" margin="0 5px">
            Privacy Policy.
          </Typography>
        </PrivacyPolicyWrapper>

        <Button text="Proceed to Pay" color="#fff" background="#2D988F" />
        <Button text="Back to Cart" color="#2D988F" background="#fff" />
      </ProceedWrapper>
    </div>
  );
}
