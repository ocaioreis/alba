import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  background-color: #71aa97;
  margin: 0;
  padding: 1rem;
  text-align: center;
`;

const Text = styled.p`
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <Foot>
      <Text>Todos os direitos reservados.</Text>
    </Foot>
  );
};

export default Footer;
