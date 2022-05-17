import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLinks, NavMenu, NavLogo, MobileIcon, NavItem, NavBtn, NavBtnLink} from './NavbarElements';

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
         <NavbarContainer>
            <NavLogo to="/">KeyGen</NavLogo>
            <MobileIcon  onClick={toggle}>
               <FaBars />
            </MobileIcon>
            <NavMenu>
               <NavItem>
                  <NavLinks to="generatePasswords">Generate Password</NavLinks>
               </NavItem>

               <NavItem>
                  <NavLinks to="about">About us</NavLinks>
               </NavItem>

               <NavItem>
                  <NavLinks to="Strength">check strength</NavLinks>
               </NavItem>

               <NavItem>
                  <NavLinks to="/signup">Sign Up</NavLinks>
               </NavItem>
            </NavMenu>

            <NavBtn>
               <NavBtnLink to="/Login">View Profile</NavBtnLink>
            </NavBtn>
         </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar
