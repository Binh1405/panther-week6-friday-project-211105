import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router";

const PrivateRoute = ({ ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (isAuthenticated) return <Route {...rest} />;
    delete rest.component;
    return <Route {...rest} render={(props) => <Navigate to="/login" />} />;
  };

export default PrivateRoute