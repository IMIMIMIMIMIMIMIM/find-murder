import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Finish = () => {
  const location = useLocation();
  const b = location.state.build;
  const f = location.state.floor;
  const r = location.state.room;
  const btext = location.state.btext;
  const ftext = location.state.ftext;
  const rtext = location.state.rtext;

  console.log("건물: " + b, "층: " + f, "방: " + r);
  const result = () => {
    if (b !== btext || f !== ftext || r !== rtext) {
      return "실패";
    } else {
      return "성공";
    }
  };
  console.log(result());
  const navigate = useNavigate();

  const ReStart = () => {
    navigate("/");
  };

  return (
    <MainDiv>
      <ResultDiv>
        {result()}
        <ReBtn onClick={ReStart}>다시하기</ReBtn>
      </ResultDiv>
    </MainDiv>
  );
};

export default Finish;

const MainDiv = styled.div`
  background-color: black;
  height: 100vh;
`;

const ResultDiv = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  flex-direction: column;
  color: white;
`;

const ReBtn = styled.button`
  border: none;
  cursor: pointer;
  width: 8rem;
  height: 3rem;
  margin: auto;
  margin-top: 2rem;
  top: 10%;
  font-size: 1.5rem;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  :hover {
    color: red;
  }
`;
