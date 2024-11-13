import React from "react";
import { Section, SectionsContainer } from "react-fullpage";
import Contact from "./pages/contact";
import Main from "./pages/main";
import Topbar from "./layout/topbar";
import { Intro1, Intro2, Intro3 } from "./pages/intro";
import { Service1, Service2, Service3, Service4 } from "./pages/service";
import Customer from "./pages/customer";

let options = {
  anchors: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  navigation: false,
  fitToSection: true,
};

function App(props) {
  return (
    <>
      <Topbar />
      <SectionsContainer {...options}>
        <Section id="main">
          <Main />
        </Section>
        <Section id="intro1">
          <Intro1 />
        </Section>
        <Section id="intro2">
          <Intro2 />
        </Section>
        <Section id="intro3">
          <Intro3 />
        </Section>
        <Section id="service1">
          <Service1 />
        </Section>
        <Section id="service2">
          <Service2 />
        </Section>
        <Section id="service3">
          <Service3 />
        </Section>
        <Section id="service4">
          <Service4 />
        </Section>
        <Section id="customer">
          <Customer />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </SectionsContainer>
    </>
  );
}

export default App;
