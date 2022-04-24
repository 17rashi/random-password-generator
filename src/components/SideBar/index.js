import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute} from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
           <CloseIcon />
        </Icon>

        <SidebarWrapper>
           <SidebarMenu>
              <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
              <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
              <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
              <SidebarLink to="signup" onClick={toggle}>Sign-up</SidebarLink>
            </SidebarMenu>

            
        </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar
