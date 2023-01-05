import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Room = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const b = location.state.build;
  const f = location.state.floor;
  console.log("건물: " + b, "층: " + f);
  const chooseRoom = (r) => {
    navigate("/finish", {
      state: {
        build: b,
        floor: f,
        room: r,
      },
    });
  };
  return (
    <MainDiv>
      <HintH1>가장 마지막</HintH1>
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
  text-align: center;
  align-items: center;
  height: 100vh;
`;
const DoorDiv = styled.div`
  background-image: url("img/door.png");
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  width: 15%;
  height: 460px;
  align-items: center;
  cursor: pointer;
`;

const HintH1 = styled.h1`
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
