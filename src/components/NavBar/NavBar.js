import React from "react";
import { Image } from "../OrderCard/Order.Styles";
import LogoImage from "../../assets/logo.png";
import {
  ActiveIcon,
  Icons,
  LogoWrapper,
  NavBarBox,
  NavBarWrapper,
  NavIcon,
  SearchButton,
  SearchInput,
  SearchWrapper,
  SubNavWrapper,
  UserNameBox,
  NavbarDropdownContent,
  NavbarDropdown,
  NavbarDropdownItem,
  NavbarDropdownsLinks,
} from "./NavBar.Styles";
import { Typography } from "../../App.Styles";
import { FaSearch } from "react-icons/fa";
import { RiUser6Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <NavBarBox>
        <LogoWrapper>
          <Image src={LogoImage} alt="logo" />
          <UserNameBox>
            Deliver to:
            <Typography fontWeight={700} margin="0 5px">
              Abu Dhabi
            </Typography>
          </UserNameBox>
        </LogoWrapper>
        <SearchWrapper>
          <SearchInput placeholder="Search here …" />
          <SearchButton>
            <FaSearch /> Search
          </SearchButton>
        </SearchWrapper>
        <Icons>
          <NavIcon>
            <FaShoppingCart fill="#fff" />
            <ActiveIcon />
          </NavIcon>
          <NavIcon>
            <RiUser6Line fill="#fff" />
          </NavIcon>
        </Icons>
      </NavBarBox>
      <SubNavWrapper>
        <NavIcon>
          <AiOutlineMenu fill="#fff" size={30} />
        </NavIcon>

        <NavbarDropdown>
          <NavbarDropdownItem>
            Building Materials <IoIosArrowDown  />
          </NavbarDropdownItem>
          <NavbarDropdownContent>
            <NavbarDropdownsLinks>Cement </NavbarDropdownsLinks>
            <NavbarDropdownsLinks> Cement Block</NavbarDropdownsLinks>
          </NavbarDropdownContent>
        </NavbarDropdown>

        <NavbarDropdown>
          <NavbarDropdownItem>
            Electrical <IoIosArrowDown  />
          </NavbarDropdownItem>
          <NavbarDropdownContent>
            <NavbarDropdownsLinks>Cable Mgmt. </NavbarDropdownsLinks>
            <NavbarDropdownsLinks> Wires & Cables</NavbarDropdownsLinks>
          </NavbarDropdownContent>
        </NavbarDropdown>

        <NavbarDropdown>
          <NavbarDropdownItem>
            Finishing <IoIosArrowDown  />
          </NavbarDropdownItem>
          <NavbarDropdownContent>
            <NavbarDropdownsLinks>Paints </NavbarDropdownsLinks>
            <NavbarDropdownsLinks> Suspended ceilings</NavbarDropdownsLinks>
          </NavbarDropdownContent>
        </NavbarDropdown>
        <NavbarDropdown>
          <NavbarDropdownItem>
            HVAC <IoIosArrowDown  />
          </NavbarDropdownItem>
          <NavbarDropdownContent>
            <NavbarDropdownsLinks>Cable Mgmt. </NavbarDropdownsLinks>
            <NavbarDropdownsLinks> Wires & Cables</NavbarDropdownsLinks>
          </NavbarDropdownContent>
        </NavbarDropdown>

        <NavbarDropdown>
          <NavbarDropdownItem>
            Tools <IoIosArrowDown  />
          </NavbarDropdownItem>
          <NavbarDropdownContent>
            <NavbarDropdownsLinks>Cable Mgmt. </NavbarDropdownsLinks>
            <NavbarDropdownsLinks> Wires & Cables</NavbarDropdownsLinks>
          </NavbarDropdownContent>
        </NavbarDropdown>

        <NavbarDropdown>
          <NavbarDropdownItem>
            Plumbing & Water Supplies <IoIosArrowDown   />
          </NavbarDropdownItem>
          <NavbarDropdownContent>
            <NavbarDropdownsLinks>Cable Mgmt. </NavbarDropdownsLinks>
            <NavbarDropdownsLinks> Wires & Cables</NavbarDropdownsLinks>
          </NavbarDropdownContent>
        </NavbarDropdown>
      </SubNavWrapper>
    </NavBarWrapper>
  );
}
