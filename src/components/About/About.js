// Import necessary libraries and components
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import myImage from "../../assets/image_2022-11-22_100700045.png";

// Define color scheme
const primaryColor = "#007bff"; // Vibrant primary blue
const accentColor = "#6c757d"; // Subtle grey for accents
const backgroundColor = "#008080"; // Teal background color
const textColor = "#fff"; // White text for readability

// Styled Components
const StyledAbout = styled.section`
  display: flex;
  flex-direction: column; /* Ensure content stacks vertically */
  align-items: center; /* Center align content horizontally */
  padding: 2rem;
  background-color: ${backgroundColor};
  margin: 0; /* Remove margin */
  width: 100%; /* Full width */
  min-height: 100vh; /* Full height */
  animation: fadeIn 1s ease-in-out;
  color: ${textColor}; /* Set text color to white */

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px); /* Smooth slide-up effect */
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem; /* Larger font size for modern look */
  color: ${textColor}; /* Set color to white */
  margin-bottom: 2rem; /* More spacing for modern look */
  font-family: 'Arial Black', sans-serif;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap; /* Allow wrapping for better responsiveness */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const AboutDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify; /* Align text within the container */
  background: rgba(255, 255, 255, 0.1); /* Slight background for modern look */
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Light shadow for modern card look */
`;

const AboutImage = styled.img`
  width: auto; /* Maintain original shape */
  max-height: 300px; /* Constrain height for better layout */
  object-fit: cover;
  border-radius: 10px; /* Slight rounding for modern look */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Shadow for modern look */
  margin-bottom: 2rem; /* Add margin for spacing */
`;

const StyledParagraph = styled.p`
  line-height: 1.8;
  color: ${textColor}; /* White text for contrast */
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem; /* Slightly larger text for readability */
`;

// PropTypes
SectionTitle.propTypes = {
  mb: PropTypes.string,
};

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionTitle>My STORY</SectionTitle>

      <AboutContent>
        <AboutImage src={myImage} alt="Portrait of Omkar Londhe" />

        <AboutDetailsContainer>
          <StyledParagraph>
            Billy Mwangi is a registered graduate mechanical engineer with experience in maintenance management, project management, process control and change management. He has been involved in projects that have reduced CO2 emission and the carbon footprint in Kenya. Also; he has been engaged in biomass waste conversion to green energy sources and industrial investment grade energy audits.

            Billy is passionate on energy management, project management, renewable and sustainable energy, environment and climate change. He is enthusiastic about steam boilers and distribution systems, compressed air systems (CAS), fluid flow systems, Heating Ventilation and Air Conditioning (HVAC) and refrigeration systems, Non Destructive techniques (NDT) and research.

            Special keenness on management of industrial energy cost comes from his passion to continually manage and reduce cost so as to improve product profitability. He derives endless satisfaction in managing industrial energy cost.

            Billy’s spare time is spent with family, mountaineering, swimming, playing chess and football, reading novels and watching movies.
          </StyledParagraph>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
