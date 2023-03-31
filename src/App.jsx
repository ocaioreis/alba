import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import QuemSomos from "./Nav/QuemSomos";
import Facilidades from "./Nav/Facilidades";
import Contato from "./Nav/Contato";
import Footer from "./Components/Footer";
import ScrollToTop from "./Scroll";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <QuemSomos />
      <Facilidades />
      <Contato />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
