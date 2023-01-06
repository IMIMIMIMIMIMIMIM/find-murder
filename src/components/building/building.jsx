import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Building = () => {
  const navigate = useNavigate();
  const chooseBuilding = (b) => {
    if (b === 2) {
      navigate("/floor", {
        state: { build: b },
      });
    } else {
      navigate("/finish", {
        state: { build: b },
      });
    }
  };
  return (
    <MainDiv>
      <ImgDiv>
        <ComImg src="/img/compass.png" />
      </ImgDiv>
      <HintH1>해가 보이지 않는 곳</HintH1>
      <ListDiv>
        <BuildingDiv onClick={() => chooseBuilding(1)}></BuildingDiv>
        <BuildingDiv onClick={() => chooseBuilding(2)}></BuildingDiv>
        <BuildingDiv onClick={() => chooseBuilding(3)}></BuildingDiv>
      </ListDiv>
    </MainDiv>
  );
};

export default Building;

const MainDiv = styled.div`
  background-color: #909090;
  height: 100vh;
`;

const ListDiv = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: auto;
  min-height: 30rem;
`;
const BuildingDiv = styled.div`
  background-image: url("img/building.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  margin: 0 1rem 0 1rem;
  width: 345px;
  height: auto;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  position: absolute;
  width: 10%;
  height: auto;
`;

const ComImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const HintH1 = styled.h1`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
`;
