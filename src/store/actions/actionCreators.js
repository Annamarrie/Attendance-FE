import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  AUTH_API_CALL_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  API_CALL_BEGIN,
  TOGGLE_SIDEBAR,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
  LOAD_USER_FAILURE,
  LOAD_USER_SUCCESS,
  LOAD_ATTENDANCES_SUCCESS,
  LOAD_ATTENDANCES_FAILURE,
  LOAD_USER_ATTENDANCE_SUCCESS,
  LOAD_USER_ATTENDANCE_FAILURE,
  UPDATE_ATTENDANCE_SUCCESS,
  UPDATE_ATTENDANCE_FAILURE,
  ADD_USER_ATTENDANCE_SUCCESS,
  ADD_USER_ATTENDANCE_FAILURE,
} from "./actionTypes";

import axios from "axios";

export const apiCallBegin = () => ({
  type: API_CALL_BEGIN,
});

export const authApiCallStart = () => ({
  type: AUTH_API_CALL_START,
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginSuccess = (user, data) => ({
  type: LOGIN_SUCCESS,
  payload: { user, data },
});

export const authLogout = () => ({
  type: LOGOUT_SUCCESS,
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const loadUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersFailure = (error) => ({
  type: LOAD_USERS_FAILURE,
  payload: error,
});

export const removeUserSuccess = (user) => ({
  type: REMOVE_USER_SUCCESS,
  payload: user,
});

export const removeUserFailure = (error) => ({
  type: REMOVE_USER_FAILURE,
  payload: error,
});

export const loadUserSuccess = (user) => ({
  type: LOAD_USER_SUCCESS,
  payload: user,
});

export const loadUserFailure = (error) => ({
  type: LOAD_USER_FAILURE,
  payload: error,
});

export const loadAttendancesSuccess = (attendances) => ({
  type: LOAD_ATTENDANCES_SUCCESS,
  payload: attendances,
});

export const loadAttendancesFailure = (error) => ({
  type: LOAD_ATTENDANCES_FAILURE,
  payload: error,
});

export const addUserAttendanceSuccess = (attendance) => ({
  type: ADD_USER_ATTENDANCE_SUCCESS,
  payload: attendance,
});

export const addUserAttendanceFailure = (error) => ({
  type: ADD_USER_ATTENDANCE_FAILURE,
  payload: error,
});

export const loadUserAttendanceSuccess = (attendance) => ({
  type: LOAD_USER_ATTENDANCE_SUCCESS,
  payload: attendance,
});

export const loadUserAttendanceFailure = (error) => ({
  type: LOAD_USER_ATTENDANCE_FAILURE,
  payload: error,
});

export const updateAttendanceSuccess = (attendance) => ({
  type: UPDATE_ATTENDANCE_SUCCESS,
  payload: attendance,
});

export const updateAttendanceFailure = (error) => ({
  type: UPDATE_ATTENDANCE_FAILURE,
  payload: error,
});
