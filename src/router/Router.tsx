import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<Login />} />
        {/* <Route path="registration" element={< />} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
