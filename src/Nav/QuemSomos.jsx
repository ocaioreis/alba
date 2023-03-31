import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Who from "../assets/Who";

const QuemSomosSec = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  height: 80%;
  width: 60%;
  padding: 2rem;
  justify-content: space-around;
  font-size: x-large;
`;

const QuemSomos = () => {
  return (
    <QuemSomosSec id="/">
      <div>
        <h1>Quem Somos?</h1>A <strong>ALBA</strong> é uma empresa comprometida
        com você, temos soluções para todas as etapas da sua obra!
      </div>

      <Content>
        <Who />
      </Content>
    </QuemSomosSec>
  );
};

export default QuemSomos;
