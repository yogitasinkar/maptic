import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { Link} from 'react-router-dom';

import brand from '../../images/maptic.png'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
        <NavbarBrand>
          <img src={brand} alt='coca-cola' style={{width: '300px', height: '100px'}}/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className='nav-link' to='/' >CSR MAP </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/ngo-search">NGO Search </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/identify-projects">Identify Projects </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/expertise-search">Expertise Search</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/csr-news">CSR News</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/social-innovation-platform">Social Innovation Platform</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/reporting-resources">Reporting Resources</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/our-clients">Our Clients</Link>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;