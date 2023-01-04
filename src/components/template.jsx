import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./footer/footer";
import "../font/font.css";

const Template = () => {
  return (
    <TemplateDiv>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </TemplateDiv>
  );
};
export default Template;

const TemplateDiv = styled.div`
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
