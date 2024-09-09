
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthState } from '../../redux/selectors/selectors';
import { setItem } from '../../services/localStorage.service';


const PrivateRoute = ({ children }: any) => {

  const isAuth = useSelector(getAuthState)
  const location = useLocation()

  if(!isAuth){
    setItem("pathname", location.pathname)
  }

  return isAuth ? children : <Navigate replace to="/signin" />
  
}

export default PrivateRoute;


