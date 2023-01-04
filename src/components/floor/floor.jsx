import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Floor = () => {
  const navigate = useNavigate();
  const door = () => {};
  const chooseFloor = (id) => {
    navigate("/room", {
      state: id,
    });
  };
  return (
    <div>
      <div></div>
      <ListDiv>
        <DoorDiv onClick={() => chooseFloor()}></DoorDiv>
        <DoorDiv onClick={() => chooseFloor()}></DoorDiv>
        <DoorDiv onClick={() => chooseFloor()}></DoorDiv>
      </ListDiv>
    </div>
  );
};

export default Floor;

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
