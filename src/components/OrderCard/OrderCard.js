import React, { useState } from "react";
import { FlexColumn, FlexRow, Typography } from "../../App.Styles";
import orderImage from "../../assets/orderimage.png";
import {
  Counter,
  CounterWrapper,
  Image,
  OrderCards,
  PriceWrapper,
} from "./Order.Styles";
import { FiTrash2 } from "react-icons/fi";

export default function OrderCard({ title, category, price }) {
  const [count, setCount] = useState(1);
  return (
    <OrderCards>
      <FlexRow>
        <Image src={orderImage} alt="order image" />
        <FlexColumn>
          <Typography fontWeight={700}>{title}</Typography>
          <Typography margin="5px 0" fontWeight={500}>
            {category}
          </Typography>
          <CounterWrapper>
            <Counter
              onClick={() => {
                count > 1 && setCount(count - 1);
              }}
            >
              -
            </Counter>

            <Typography>{count}</Typography>
            <Counter onClick={() => setCount(count + 1)}>+</Counter>
          </CounterWrapper>
        </FlexColumn>
      </FlexRow>
      <PriceWrapper>
        <Typography color="#1E1009" fontWeight={700}>
          {price}
        </Typography>
        <Typography>
          <FiTrash2 color="#B00020" size={20} />
        </Typography>
      </PriceWrapper>
    </OrderCards>
  );
}
