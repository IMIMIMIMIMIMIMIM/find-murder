import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();
  const start = () => {
    navigate("/building");
  };
  return (
    <MainDiv>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ImgTag src="/img/murder.png" />
        <StartBtn onClick={start}>시작하기</StartBtn>
      </div>
    </MainDiv>
  );
};

export default Main;

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #303030;
`;

const StartBtn = styled.button`
  top: 75%;
  left: 50%;
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 1px solid grey;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

const ImgTag = styled.img`
  width: 25rem;
  height: auto;
  align-self: center;
  margin-top: 5%;
`;
