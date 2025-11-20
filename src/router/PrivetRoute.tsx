import { Navigate } from "react-router";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const user = localStorage.getItem("user");

  if (!user) {
    // Not logged in and redirect to login page
    alert("Please login to access this page.");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
