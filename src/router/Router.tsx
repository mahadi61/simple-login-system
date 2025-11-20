import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>
  );
};

export default Router;
