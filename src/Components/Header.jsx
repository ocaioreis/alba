import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import QuemSomos from "../Nav/QuemSomos";

const Title = styled.h1`
  text-decoration: double;
  padding: 2rem;
  cursor: pointer;
`;

const Nav = styled.nav`
  background-color: #0e553e;
  display: flex;
  justify-content: space-between;
  color: whitesmoke;
`;

const Ul = styled.ul`
  display: flex;
  gap: 4rem;
  margin-right: 2rem;
  padding: 2rem;
`;

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Nav>
      <Title>Alba | Construtora</Title>
      <Ul>
        <Li>Quem Somos</Li>

        <Li>Facilidades</Li>

        <Li>Contato</Li>
      </Ul>
    </Nav>
  );
};

export default Header;
