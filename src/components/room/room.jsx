import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Hint from "../hint/hint";

const Room = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const b = location.state.build;
  const f = location.state.floor;
  const btext = location.state.btext;
  const ftext = location.state.ftext;
  console.log("건물: " + b, "층: " + f);
  const chooseRoom = (r) => {
    navigate("/finish", {
      state: {
        build: b,
        floor: f,
        room: r,
        btext: btext,
        ftext: ftext,
        rtext: text.id,
      },
    });
  };
  const hintList = [
    {
      id: 1,
      hint: "무지개가 시작되는 곳",
    },
    {
      id: 2,
      hint: "봄 기운이 완연한 곳",
    },
    {
      id: 3,
      hint: "모든 것을 삼키는 곳",
    },
    {
      id: 1,
      hint: "가장 붐비는 곳",
    },
    {
      id: 2,
      hint: "가장 안전한 곳",
    },
  ];
  console.log(hintList[0].id);
  const hintText = (array) => {
    const random = Math.floor(Math.random() * hintList.length);
    return array[random];
  };
  let text = hintText(hintList);
  console.log(text);
  return (
    <MainDiv>
      <HintH1>{text.hint}</HintH1>
      <ListDiv>
        <DoorDiv
          bgImage="url(img/reddoor.png)"
          onClick={() => chooseRoom(1)}
        ></DoorDiv>
        <DoorDiv
          bgImage="url(img/greendoor.png)"
          onClick={() => chooseRoom(2)}
        ></DoorDiv>
        <DoorDiv
          bgImage="url(img/bluedoor.png)"
          onClick={() => chooseRoom(3)}
        ></DoorDiv>
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
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: auto;
  min-height: 30rem;
`;
const DoorDiv = styled.div`
  background-image: ${(props) => props.bgImage};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  margin: 0 1rem 0 1rem;
  width: 330px;
  height: auto;
  align-items: center;
  cursor: pointer;
`;

const HintH1 = styled.h1`
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
