import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../components/template";
import Main from "../components/main/main";
import Room from "../components/room/room";
import Floor from "../components/floor/floor";
import Building from "../components/building/building";
import Finish from "../components/finish/finish";
const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template></Template>}>
          <Route path="" element={<Main></Main>}></Route>
          <Route path="/building" element={<Building></Building>}></Route>
          <Route path="/floor" element={<Floor></Floor>}></Route>
          <Route path="/room" element={<Room></Room>}></Route>
          <Route path="/finish" element={<Finish></Finish>}></Route>
          {/* <Route path="/room" element={<Room></Room>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
