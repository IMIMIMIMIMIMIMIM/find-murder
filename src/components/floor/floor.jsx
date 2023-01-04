import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Floor = () => {
  const navigate = useNavigate();
  const chooseFloor = (id) => {
    navigate("/room", {
      state: id,
    });
  };
  return (
    <div style={{ backgroundColor: "#606060" }}>
      <ListDiv>
        <FloorDiv onClick={() => chooseFloor()}>1F</FloorDiv>
        <FloorDiv onClick={() => chooseFloor()}>2F</FloorDiv>
        <FloorDiv onClick={() => chooseFloor()}>3F</FloorDiv>
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
const FloorDiv = styled.div`
  background-image: url("img/stairs.png");
  display: flex;
  width: 512px;
  height: 512px;
  align-items: center;
  cursor: pointer;
  color: white;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
`;
