import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Building = () => {
  const navigate = useNavigate();
  const chooseBuilding = (b) => {
    if (b === text.id) {
      navigate("/floor", {
        state: { build: b, btext: text.id },
      });
    } else {
      navigate("/finish", {
        state: { build: b },
      });
    }
  };

  const hintList = [
    {
      id: 1,
      hint: "시간이 가장 느리게 가는 곳",
    },
    {
      id: 2,
      hint: "빛이 들지 않는 곳",
    },
    {
      id: 3,
      hint: "하루가 가장 빨리 시작되는 곳",
    },
    {
      id: 1,
      hint: "달이 지는 곳",
    },
    {
      id: 2,
      hint: "시작과 끝이 공존하는 곳",
    },
  ];
  console.log(hintList[0].id);
  const hintText = (array) => {
    const random = Math.floor(Math.random() * hintList.length);
    return array[random];
  };
  let text = hintText(hintList);
  console.log(text);
  return (
    <MainDiv>
      <ImgDiv>
        <ComImg src="/img/compass.png" />
      </ImgDiv>
      <HintH1>{text.hint}</HintH1>
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
