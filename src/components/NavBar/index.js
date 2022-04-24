import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLinks, NavMenu, NavLogo, MobileIcon, NavItem, NavBtn, NavBtnLink} from './NavbarElements';


const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
         <NavbarContainer>
            <NavLogo to="/">Random</NavLogo>
            <MobileIcon  onClick={toggle}>
               <FaBars />
            </MobileIcon>
            <NavMenu>
               <NavItem>
                  <NavLinks to="generate">Generate Password</NavLinks>
               </NavItem>

               <NavItem>
                  <NavLinks to="about">About us</NavLinks>
               </NavItem>

               <NavItem>
                  <NavLinks to="strength">check strength</NavLinks>
               </NavItem>

               <NavItem>
                  <NavLinks to="signup">Sign Up</NavLinks>
               </NavItem>
            </NavMenu>

            <NavBtn>
               <NavBtnLink to="/profile">View Profile</NavBtnLink>
            </NavBtn>



         </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar
