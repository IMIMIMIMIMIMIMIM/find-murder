import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();
  const start = () => {
    navigate("/building");
  };
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <MainDiv>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ImgTag src={`${process.env.PUBLIC_URL}/img/murder.png`} />
        <StartBtn onClick={start}>시작하기</StartBtn>
        <ModalBtn onClick={openModal}>How to</ModalBtn>
        {modal ? (
          <Background onClick={closeModal}>
            <Modal onClick={(e) => e.stopPropagation()}>
              <div>
                <h2 style={{ fontStyle: "italic" }}>Find Murder</h2>
                <Ex>1. 주어진 단서로 살인자를 위치를 찾아내야 합니다.</Ex>
                <br></br>
                <Ex>2. 한 번이라도 틀릴 경우 실패합니다.</Ex>
                <br></br>
                <Ex>3. 살인자의 위치는 매 게임마다 변경됩니다.</Ex>
                <br></br>
                <Ex>
                  4. 실패할 경우 새로운 게임으로 처음부터 다시 시작합니다.
                </Ex>
                <br></br>
                <Ex fontWeight="bold">Good Luck</Ex>
              </div>
              <CloseBtn
                className="xi-close-min xi-2x"
                onClick={closeModal}
              ></CloseBtn>
            </Modal>
          </Background>
        ) : null}
      </div>
    </MainDiv>
  );
};

export default Main;

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #303030;
`;

const StartBtn = styled.button`
  top: 85%;
  left: 50%;
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

const ImgTag = styled.img`
  width: 25rem;
  height: auto;
  align-self: center;
  margin-top: 1rem;
`;

const ModalBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 4rem;
  height: 2rem;
  right: 0;
  margin: 2rem 2rem 0 0;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: auto;
  padding: 16px;
  background: #7a7a7a;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 20px 5px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
`;

const Ex = styled.h4`
  font-style: italic;
`;
