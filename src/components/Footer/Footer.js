import React from "react";
import {  Input, Typography } from "../../App.Styles";
import LogoImage from "../../assets/logo.png";
import MasterCardImage from "../../assets/footer1.png";
import UnionImage from "../../assets/footer2.png";
import VISAImage from "../../assets/footer3.png";

import { Image } from "../OrderCard/Order.Styles";
import {
  Footerborder,
  FooterButton,
  FooterIcon,
  FooterIcons,
  FooterImageWrapper,
  FooterList,
  FooterListItem,
  FooterLogoImage,
  FooterSection,
  FooterTypography,
  FooterWrapper,
  SubFooter,
} from "./Footer.Styles";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
        <FooterWrapper>
      <FooterSection>
        <FooterLogoImage src={LogoImage} alt="logo" />
        <FooterTypography margin="20px 0">
          A massive collection of authentic and verified data for you to choose
          from. Search and order products from our trusted suppliers.
        </FooterTypography>
        <Footerborder />
        <FooterIcons>
          <FooterIcon>
            <FaFacebookF size={16} color="#2d988f" />
          </FooterIcon>
          <FooterIcon>
            <FaTwitter size={16} color="#2d988f" />
          </FooterIcon>
          <FooterIcon>
            <FaInstagram size={16} color="#2d988f" />
          </FooterIcon>
        </FooterIcons>
      </FooterSection>
      <FooterSection>
        <FooterTypography fontWeight={700} fontSize={18}>
          Legals
        </FooterTypography>

        <FooterList>
          <FooterListItem>Privacy Policy</FooterListItem>
          <FooterListItem>Terms and Conditions</FooterListItem>
          <FooterListItem>FAQ’s</FooterListItem>
        </FooterList>
      </FooterSection>
      <FooterSection>
        <FooterTypography fontWeight={700} fontSize={18}>
          Resources
        </FooterTypography>
        <FooterList>
          <FooterListItem>About us</FooterListItem>
          <FooterListItem>Contact us</FooterListItem>
          <FooterListItem>Blog</FooterListItem>
        </FooterList>
      </FooterSection>
      <FooterSection>
        <FooterTypography fontWeight={700} fontSize={18}>
          Community
        </FooterTypography>
        <Typography margin="15px 0 5px 0">
          Get the latest news & updates
        </Typography>
        <Input placeholder="Your Email" />
        <FooterButton> Subscribe Now</FooterButton>

        <FooterImageWrapper>
          <Image src={VISAImage} alt="logo" />
          <Image src={UnionImage} alt="logo" />{" "}
          <Image src={MasterCardImage} alt="logo" />
        </FooterImageWrapper>
      </FooterSection>
    </FooterWrapper>
    <SubFooter>
    Copyright © 2022 Lumsum services LLC. All rights reserved.
    </SubFooter>
    </>

  );
}
