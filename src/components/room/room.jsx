import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Room = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const b = location.state.build;
  const f = location.state.floor;
  const btext = location.state.btext;
  const ftext = location.state.ftext;
  console.log("건물: " + b, "층: " + f);
  const chooseRoom = (r) => {
    navigate("/finish", {
      state: {
        build: b,
        floor: f,
        room: r,
        btext: btext,
        ftext: ftext,
        rtext: text.id,
      },
    });
  };
  const hintList = [
    {
      id: 1,
      hint: "첫번째 힌트 정답 1번",
    },
    {
      id: 2,
      hint: "두번째 힌트 정답 2번",
    },
    {
      id: 3,
      hint: "세번째 힌트 정답 3번",
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
        <DoorDiv onClick={() => chooseRoom(1)}></DoorDiv>
        <DoorDiv onClick={() => chooseRoom(2)}></DoorDiv>
        <DoorDiv onClick={() => chooseRoom(3)}></DoorDiv>
      </ListDiv>
    </MainDiv>
  );
};

export default Room;

const MainDiv = styled.div`
  background-color: #202020;
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
const DoorDiv = styled.div`
  background-image: url("img/door.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  margin: 0 1rem 0 1rem;
  width: 330px;
  height: auto;
  align-items: center;
  cursor: pointer;
`;

const HintH1 = styled.h1`
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
