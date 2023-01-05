import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Building = () => {
  const navigate = useNavigate();
  const chooseBuilding = (id) => {
    navigate("/floor", {
      state: { build: id },
    });
  };
  return (
    <MainDiv>
      <ImgDiv>
        <ImgTag src="/img/compass.png" />
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
  max-height: 500px;
  height: 100%;
  /* position: relative; */
`;
const BuildingDiv = styled.div`
  background-image: url("img/building.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  width: 18%;
  height: auto;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  position: absolute;
  width: 10%;
  height: auto;
`;

const ImgTag = styled.img`
  max-width: 100%;
  height: auto;
`;

const HintH1 = styled.h1`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
`;
