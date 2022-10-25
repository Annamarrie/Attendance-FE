import jwt from "jsonwebtoken";
import { toast } from "react-toastify";

import {
  authApiCallStart,
  signupFailure,
  signupSuccess,
  loginSuccess,
  loginFailure,
  authLogout,
} from "../actions/actionCreators";
import storage from "../../utils/localStorage";
import http from "../../services/http";

const apiEndPoint = process.env.REACT_APP_API_END_POINT;

export const signupUserAsync = (user) => async (dispatch) => {
  dispatch(authApiCallStart());
  try {
    const response = await http.post(`${apiEndPoint}signup`, user);
    dispatch(signupSuccess(response.data));
    toast.success("user signup successfully");
  } catch (error) {
    dispatch(signupFailure(error.response.data.message));
    toast.error(error.response.data.message || "Something went wrong!");
  }
};

export const loginUserAsync = (user) => async (dispatch) => {
  dispatch(authApiCallStart());
  try {
    const response = await http.post(`${apiEndPoint}signin`, user);
    const { token } = response.data.data;
    storage.setAuthToken(response.data.data);
    const loggedInUser = jwt.decode(token);
    dispatch(loginSuccess(loggedInUser, response.data.data.user));
    toast.success(`😊 ${response.data.message}`);
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
    toast.error(`😢 ${error.response.data.message}`);
  }
};

export const logoutUser = () => (dispatch) => {
  storage.removeAuthToken();
  dispatch(authLogout());
};
