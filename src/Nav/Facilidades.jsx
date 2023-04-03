import React from "react";
import styled from "styled-components";
import Ok from "../assets/Ok";

const FacilidadesSec = styled.section`
  height: 100vh;

  display: flex;
  padding: 1rem;
`;

const Content = styled.div`
  height: 80%;
  width: 60%;
  padding: 2rem;
  justify-content: space-around;
  font-size: x-large;
`;

const Facilidades = () => {
  return (
    <FacilidadesSec id="facilidades">
      <Ok />
      <Content>
        <h1>Facilidades</h1>
        Cuidamos da parte chata e burocrática da reforma, para que você tenha
        tempo de focar no que realmente importa
      </Content>
    </FacilidadesSec>
  );
};

export default Facilidades;
