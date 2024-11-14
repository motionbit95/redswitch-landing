import React from "react";
import { Section, SectionsContainer } from "react-fullpage";
import Topbar from "./layout/topbar";
import Page from "./layout/page";
// 페이지 이미지들
import img1 from "./asset/page/1.png";
import img2 from "./asset/page/2.png";
import img3 from "./asset/page/3.png";
import img4 from "./asset/page/4.png";
import img5 from "./asset/page/5.png";
import img6 from "./asset/page/6.png";
import img7 from "./asset/page/7.png";
import img8 from "./asset/page/8.png";
import img9 from "./asset/page/9.png";
import img10 from "./asset/page/10.png";
import img11 from "./asset/page/11.png";

let options = {
  anchors: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  navigation: false,
  fitToSection: true,
};

function App(props) {
  return (
    <>
      <Topbar />
      <SectionsContainer {...options}>
        <Section>
          <Page>
            <img src={img1} alt="main" className="image" />
          </Page>
        </Section>
        <Page>
          <img src={img2} alt="intro1" className="image" />
        </Page>
        <Page>
          <img src={img3} alt="intro2" className="image" />
        </Page>
        <Page>
          <img src={img4} alt="intro3" className="image" />
        </Page>
        <Page>
          <img src={img5} alt="service1" className="image" />
        </Page>
        <Page>
          <img src={img6} alt="service2" className="image" />
        </Page>
        <Page>
          <img src={img7} alt="service3" className="image" />
        </Page>
        <Page>
          <img src={img8} alt="service4" className="image" />
        </Page>
        <Page>
          <img src={img9} alt="main" className="image" />
        </Page>
        <Page>
          <img src={img10} alt="main" className="image" />
        </Page>
        <Page>
          <img src={img11} alt="main" className="image" />
        </Page>
      </SectionsContainer>
    </>
  );
}

export default App;
