import styled from "styled-components";
import { Input } from "../../App.Styles";

export const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2d988f;
  padding: 0 20px;
  border-radius: 0px 0px 10px 10px;
`;
export const NavBarBox = styled.div`
  display: flex;
  background-color: #2d988f;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #cccccc36;
`;

export const UserNameBox = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 20px;
  align-items: center;
  color: #fff;
`;

export const SearchButton = styled.button`
  color: #fff;
  background-color: #2d988f;
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 12px 25px;
  display: flex;
  align-items: center;
  height: 48px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    background-color: #28837b;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 55%;
  background: #fff;
  border-radius: 6px;
  margin: 10px 0;
  height: 60px;
  align-items: center;
  cursor: pointer;
`;

export const SearchInput = styled(Input)`
  margin: 10px 0;
  padding: 10px 20px;
`;

export const Icons = styled("div")`
  display: flex;
`;

export const NavIcon = styled("div")`
  display: flex;
  padding: 15px;
  font-size: 25px;
  margin-right: 5px;
  align-items: center;

  &:hover {
    background-color: #28837b;
    border-radius: 4px;
  }
`;

export const ActiveIcon = styled("div")`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #ff8c4b;
  margin-left: -5px;
`;

export const LogoWrapper = styled("div")`
  display: flex;
`;

export const SubNavWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const NavbarDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    display: block;
    width: fit-content;
    > div {
      display: block;
      width: fit-content;
      border-radius: 0px 0px 6px 6px;
    }
  }
`;

export const NavbarDropdownItem = styled.div`
  color: #fff;
  font-size: 14px;
  padding: 26px 40px;
  width: fit-content;

  &:hover {
    background-color: #28837b;
    border-radius: 4px;
  }
`;

export const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  width: inherit;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
`;

export const NavbarDropdownsLinks = styled.div`
padding: 10px 0;
color: #003539;

`
