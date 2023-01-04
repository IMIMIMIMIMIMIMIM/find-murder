import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Room = () => {
  const navigate = useNavigate();
  const chooseRoom = (id) => {
    navigate("/final", {
      state: id,
    });
  };
  return (
    <div style={{ backgroundColor: "#202020" }}>
      <ListDiv>
        <DoorDiv onClick={() => chooseRoom()}></DoorDiv>
        <DoorDiv onClick={() => chooseRoom()}></DoorDiv>
        <DoorDiv onClick={() => chooseRoom()}></DoorDiv>
      </ListDiv>
    </div>
  );
};

export default Room;

const ListDiv = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  height: 100vh;
`;
const DoorDiv = styled.div`
  background-image: url("img/door.png");
  display: flex;
  width: 315px;
  height: 460px;
  align-items: center;
  cursor: pointer;
`;
