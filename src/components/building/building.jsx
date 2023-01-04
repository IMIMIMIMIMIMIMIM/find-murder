import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Building = () => {
  const navigate = useNavigate();
  const chooseBuilding = (id) => {
    navigate("/floor", {
      state: id,
    });
  };
  return (
    <ListDiv>
      <DoorDiv onClick={() => chooseBuilding(1)}></DoorDiv>
      <DoorDiv onClick={() => chooseBuilding(2)}></DoorDiv>
      <DoorDiv onClick={() => chooseBuilding(3)}></DoorDiv>
    </ListDiv>
  );
};

export default Building;

const ListDiv = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  height: 100vh;
`;
const DoorDiv = styled.div`
  background-image: url("img/building.png");
  display: flex;
  width: 28%;
  height: 500px;
  cursor: pointer;
`;
