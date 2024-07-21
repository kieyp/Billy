import React from "react";
import styled, { keyframes } from "styled-components";
import { IconContext } from "react-icons";
import { SiGmail } from "react-icons/si";
import profileImage from "../../assets/How-to-stay-updated-with-latest-advancements-in-mechanical-engineering.webp"; // Example profile image import

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledHome = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${profileImage}) no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  overflow: hidden;
  text-align: center;
  padding: 0 2rem; /* Add horizontal padding for small screens */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroSection = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px; /* Increase max-width for better text visibility */
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800; /* Boldest font weight for emphasis */
  font-size: 5rem; /* Significantly larger font size */
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); /* Strong text shadow for prominence */
  line-height: 1.2; /* Adjust line height for better spacing */
  animation: ${slideIn} 1s ease-out;
  text-transform: uppercase; /* Convert text to uppercase */
`;

const HeroText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.6;
  margin-top: 1rem;
  text-transform: uppercase; /* Convert text to uppercase */
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add text shadow for better readability */
  animation: ${fadeIn} 1.5s ease-out;
`;

const SocialIcons = styled.div`
  margin-top: 2rem;
  animation: ${fadeIn} 2s ease-out;

  & > a {
    font-size: 2.5rem;
    color: #fff;
    margin: 0 1rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #007bff; /* Highlight color on hover */
      transform: scale(1.1); /* Slightly enlarge icons on hover */
    }
  }
`;

const Home = () => {
  let today = new Date();
  let hour = today.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <StyledHome id="home">
        <Overlay />
        <HeroSection className="fade-in">
          <HeroTitle>
            {greeting}<br />
            I AM BILLY
          </HeroTitle>
          <HeroText>
            WELCOME TO MY PERSONAL SPACE WHERE INNOVATION MEETS PASSION.
          </HeroText>
          <SocialIcons className="social-icons">
            <a href="mailto:Billymkings@gmail.com" aria-label="Email">
              <SiGmail />
            </a>
          </SocialIcons>
        </HeroSection>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
