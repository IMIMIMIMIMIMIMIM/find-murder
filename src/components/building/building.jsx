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
    <div style={{ backgroundColor: "#909090" }}>
      <ComImg src="/img/compass.png" />
      <ListDiv>
        <BuildingDiv onClick={() => chooseBuilding(1)}></BuildingDiv>
        <BuildingDiv onClick={() => chooseBuilding(2)}></BuildingDiv>
        <BuildingDiv onClick={() => chooseBuilding(3)}></BuildingDiv>
      </ListDiv>
    </div>
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
const BuildingDiv = styled.div`
  background-image: url("img/building.png");
  display: flex;
  width: 345px;
  height: 500px;
  cursor: pointer;
`;

const ComImg = styled.img`
  width: 200px;
  position: absolute;
`;
