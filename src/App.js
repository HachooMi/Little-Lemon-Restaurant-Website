import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Hero from './hero.js';
import Specials from './specials.js';
import Testimonials from './testemonials.js'; 
import Owners from './owners.js';
import Footer from './footer.js';
import BookingForm from './bookingForm.js';

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 1); 
  text-decoration: none; 
`;

const NavbarContainer = styled.div`
  position: relative; 
  width: 100%;
  height: 73px;
  background-color: #fff;
`;

const Group618 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1041px;
  margin: 0 auto;
`;

const Logo1 = styled.img`
  width: 264px;
  height: 100%;
  margin-right: 20px;
  @media (max-width: 768px) { 
    width: 200px; 
  }
`;

const MenuItem = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 30px;
  line-height: 30px;
  font-family: 'Markazi Text', serif;
  font-weight: 700;
  margin-left: ${({ marginLeft }) => marginLeft || '35px'};
  cursor: pointer;
`;

const ReservationsLink = styled(Link)`
  color: rgba(0, 0, 0, 1);
  text-decoration: none;
  background-color: ;
  font-size: 30px;
  line-height: 30px;
  font-family: 'Markazi Text', serif;
  font-weight: 700;
  margin-left: 35px;
  cursor: pointer;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const HamburgerMenuIcon = styled.div`
  display: none; 
  cursor: pointer;

  @media (max-width: 768px) { 
    display: block;
    margin-right: 1000px;
  }
`;

const NavigationItems = styled.div`
@media (max-width: 768px) {
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')}; 
  flex-direction: column; 
  align-items: flex-start; 
  position: absolute; 
  top: 50px; 
  left: 0; 
  width: 70%; 
  background-color: #fff; 
  padding: 10px 0; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

@media (min-width: 769px) {
  display: flex;
  justify-content: flex-end;
  width: auto;
  position: static;
} 

  @media (min-width: 769px) { 
    display: flex;
    justify-content: flex-end; // 
    width: auto; 
    position: static; 
  }
`;

const OtherContent = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'block')}; 
`;


function App() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.title = "Little Lemon";
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleReservationsClick = () => {
    setIsMenuOpen(false);
  }

  const handleHomeClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className="App">
      <NavbarContainer>
        <Group618>
          <Logo1
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2h3whpvu0oj-13%3A71?alt=media&token=89d659eb-c71a-4992-9836-fb4c0536b71b"
            alt="Not Found"
            className="logo"
          />
          <HamburgerMenuIcon onClick={toggleMenu}>☰</HamburgerMenuIcon>
          <NavigationItems isMenuOpen={isMenuOpen}> 
          <MenuItem className="home" onClick={handleHomeClick}>
          <StyledLink to="/">Home</StyledLink>
        </MenuItem>
            <MenuItem className="about">About</MenuItem>
            <MenuItem className="menu">Menu</MenuItem>
            <ReservationsLink to="/bookingForm" className="reservations" onClick={handleReservationsClick}>
              Reservations
            </ReservationsLink>
            <MenuItem className="order-online">Delivery</MenuItem>
            <MenuItem className="login">Login</MenuItem>
          </NavigationItems>
        </Group618>
      </NavbarContainer>
      <OtherContent isMenuOpen={isMenuOpen}>
        <Routes>
          <Route path="/bookingForm" element={<BookingForm />} />
        </Routes>
        <Hero />
        <Specials />
        <Testimonials />
        <Owners />
        <Footer />
      </OtherContent>
    </div>
  );
}

export default App;
