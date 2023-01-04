import styled from "styled-components";

const Footer = () => {
  return <FooterDiv>첫번째</FooterDiv>;
};

export default Footer;

const FooterDiv = styled.div`
  bottom: 0;
  width: 100%;
  background-color: #9d9797;
  color: black;
  text-align: center;
  position: absolute;
  font-size: 1.5rem;
  font-weight: bold;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
