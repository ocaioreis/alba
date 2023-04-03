import React, { useState } from "react";
import { createRef } from "react";
import styled from "styled-components";
import Contact from "../assets/Contact";

const ContatoSec = styled.section`
  height: 100vh;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  padding: 2rem;
  justify-content: space-between;
  font-size: x-large;
`;

const Form = styled.form`
  margin-top: 2rem;
  display: grid;

  gap: 0.5rem;
`;

const Btn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 2rem;
  align-self: center;
  &:focus {
    background-color: green;
  }
`;

const Inpt = styled.input`
  border-radius: 8px;
`;

const Contato = () => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <ContatoSec id="contato">
      <Content>
        <Form>
          <label htmlFor="nome">Nome: </label>
          <Inpt type="text" name="" id="nome" />

          <label htmlFor="email">Email: </label>
          <Inpt type="email" name="" id="email" />

          <label htmlFor="tel">Telefone: </label>
          <Inpt type="tel" name="" id="tel" />

          <label htmlFor="check">
            Autorizo que a ALBA me envie mensagens por e-mail{" "}
          </label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChecked}
            name=""
            id="check"
          />
          {checked ? <Btn>Enviar</Btn> : <Btn disabled>Enviar</Btn>}
        </Form>

        <Contact />
      </Content>
    </ContatoSec>
  );
};

export default Contato;
