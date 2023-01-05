import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Floor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const b = location.state.build;
  console.log("건물: " + b);
  const chooseFloor = (f) => {
    navigate("/room", {
      state: {
        build: b,
        floor: f,
      },
    });
  };

  return (
    <MainDiv>
      <HintH1>높지도 낮지도 않은 곳</HintH1>
      <ListDiv>
        <FloorDiv onClick={() => chooseFloor(1)}>1F</FloorDiv>
        <FloorDiv onClick={() => chooseFloor(2)}>2F</FloorDiv>
        <FloorDiv onClick={() => chooseFloor(3)}>3F</FloorDiv>
      </ListDiv>
    </MainDiv>
  );
};

export default Floor;

const MainDiv = styled.div`
  background-color: #606060;
  height: 100vh;
`;

const ListDiv = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  height: 100vh;
`;
const FloorDiv = styled.div`
  background-image: url("img/stairs.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  width: 25%;
  height: 512px;
  align-items: center;
  cursor: pointer;
  color: white;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
`;

const HintH1 = styled.h1`
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
