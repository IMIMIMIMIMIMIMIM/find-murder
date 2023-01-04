import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Room = () => {
  const doorList = [];
  const navigate = useNavigate();
  const door = () => {};
  const chooseRoom = (id) => {
    navigate("/final", {
      state: id,
    });
  };
  return (
    <div>
      <div></div>
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
  display: flex;
  width: 20%;
  height: 500px;
  background-color: brown;
  align-items: center;
  cursor: pointer;
`;
