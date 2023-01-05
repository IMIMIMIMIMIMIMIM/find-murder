import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Finish = () => {
  const location = useLocation();
  const b = location.state.build;
  const f = location.state.floor;
  const r = location.state.room;
  console.log("건물: " + b, "층: " + f, "방: " + r);
  const result = () => {
    if (b === 2 && f === 2 && r === 3) {
      return "성공";
    } else {
      return "실패";
    }
  };
  console.log(result());

  return (
    <div>
      <ResultDiv>{result()}</ResultDiv>
    </div>
  );
};

export default Finish;

const ResultDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
`;
