import React, { useContext } from "react";
import {getData} from "../services/storage"

import AuthRoutes from '../navigation/auth.routes';
 import AppRoutes from '../navigation/app.routes';
 import AuthContext from "../contexts/auth";

const Routes = () => {
  const { signed } = useContext(AuthContext);
  return  <AuthRoutes /> 

//return <AuthRoutes />
};

export default Routes;
