
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { logout } from '../slices/loginSlice';
import {
  NavbarContainer,
  LeftContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  LinksButton,
  NavbarLinkExtended,
  RightContainer,
} from "../styledComponents/navbar";

function Navbar() {
  const dispatch = useDispatch();
  const [extendNavbar, setExtendNavbar] = useState(false);

  const signout = () => {
    dispatch(logout());
    localStorage.clear();
};

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
          <NavbarLink to="/user-list"> Home</NavbarLink>
            <NavbarLink to="/album"> Album</NavbarLink>
            <LinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </LinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
            <NavbarLink to="/" onClick={signout}> Logout</NavbarLink>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/user-list"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/album"> Album</NavbarLinkExtended>
          <NavbarLinkExtended to="/" onClick={signout}> Logout</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;