import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem('token');
  
  return !token ? <Navigate to="/" /> : children
};

export default PrivateRoute;
