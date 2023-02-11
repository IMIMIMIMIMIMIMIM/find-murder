import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Hint from "../hint/hint";

const Floor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const b = location.state.build;
  const btext = location.state.btext;
  console.log("건물: " + b);
  const chooseFloor = (f) => {
    if (f === text.id) {
      navigate("/room", {
        state: {
          build: b,
          floor: f,
          btext: btext,
          ftext: text.id,
        },
      });
    } else {
      navigate("/finish", {
        state: { floor: f },
      });
    }
  };
  const hintList = [
    {
      id: 1,
      hint: "눈이 마주치는 곳",
    },
    {
      id: 2,
      hint: "가장 시끄러운 곳",
    },
    {
      id: 3,
      hint: "가장 멀리 보이는 곳",
    },
    {
      id: 1,
      hint: "가장 추운 곳",
    },
    {
      id: 2,
      hint: "높지도 낮지도 않은 곳",
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
      <HintH1>{text.hint}</HintH1>
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
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: auto;
  min-height: 30rem;
`;
const FloorDiv = styled.div`
  background-image: url("img/stairs.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  margin: 0 1rem 0 1rem;
  width: 480px;
  min-width: 115px;
  height: auto;
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
