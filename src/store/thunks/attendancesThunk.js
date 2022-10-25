import { toast } from "react-toastify";
import {
  apiCallBegin,
  loadAttendancesSuccess,
  loadAttendancesFailure,
  addUserAttendanceSuccess,
  addUserAttendanceFailure,
  loadUserAttendanceSuccess,
  loadUserAttendanceFailure,
  updateAttendanceSuccess,
  updateAttendanceFailure,
} from "../actions/actionCreators";
import http from "../../services/http";

const apiEndPoint = process.env.REACT_APP_API_END_POINT;

export const loadAttendancesAsync = () => async (dispatch) => {
  dispatch(apiCallBegin());
  try {
    const response = await http.get(`${apiEndPoint}attendances`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("authToken")).token
        }`,
      },
    });
    dispatch(loadAttendancesSuccess(response.data));
  } catch (error) {
    dispatch(
      loadAttendancesFailure(
        error.response
          ? error.response.data.message
          : "Error loading attendances"
      )
    );
    toast.error(
      error.response ? error.response.data.message : "Error loading attendances"
    );
  }
};

export const addUserAttendanceAsync =
  (attendance, userId) => async (dispatch) => {
    dispatch(apiCallBegin());
    try {
      const newAttendance = {};
      newAttendance.attendanceDate = attendance.attendanceDate;
      newAttendance.attendanceEntranceTime = attendance.attendanceEntranceTime;
      const response = await http.post(`${apiEndPoint}attendance/${userId}`, {
        data: attendance,
      });
      dispatch(addUserAttendanceSuccess(response.data));
      toast.success("Attendance users updated successfully!");
    } catch (error) {
      dispatch(
        addUserAttendanceFailure(
          error.response ? error.response.data.message : "Something went wrong!"
        )
      );
      toast.error(
        error.response ? error.response.data.message : "Something went wrong!"
      );
    }
  };

export const loadUserAttendanceAsync = (attendanceId) => async (dispatch) => {
  dispatch(apiCallBegin());
  try {
    const response = await http.get(
      `${apiEndPoint}attendance/${attendanceId}`,
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authToken")).token
          }`,
        },
      }
    );
    dispatch(loadUserAttendanceSuccess(response.data));
  } catch (error) {
    dispatch(
      loadUserAttendanceFailure(
        error.response
          ? error.response.data.message
          : "Error loading user attendance"
      )
    );
    toast.error(
      error.response
        ? error.response.data.message
        : "Error user loading attendance"
    );
  }
};

export const updateAttendanceAsync =
  (attendance, userId) => async (dispatch) => {
    dispatch(apiCallBegin());
    try {
      const newAttendance = {};
      newAttendance.attendanceDate = attendance.attendanceDate;
      newAttendance.attendanceEntranceTime = attendance.attendanceEntranceTime;
      newAttendance.attendanceExitTime = attendance.attendanceExitTime;
      const response = await http.put(
        `${apiEndPoint}attendanceusers/${userId}`,
        {
          data: attendance,
        }
      );
      dispatch(updateAttendanceSuccess(response.data));
      toast.success("Attendance users updated successfully!");
    } catch (error) {
      dispatch(
        updateAttendanceFailure(
          error.response ? error.response.data.message : "Something went wrong!"
        )
      );
      toast.error(
        error.response ? error.response.data.message : "Something went wrong!"
      );
    }
  };
