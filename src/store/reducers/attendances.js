import {
  API_CALL_BEGIN,
  LOAD_ATTENDANCES_SUCCESS,
  LOAD_ATTENDANCES_FAILURE,
  ADD_USER_ATTENDANCE_SUCCESS,
  ADD_USER_ATTENDANCE_FAILURE,
  LOAD_USER_ATTENDANCE_SUCCESS,
  LOAD_USER_ATTENDANCE_FAILURE,
  UPDATE_ATTENDANCE_SUCCESS,
  UPDATE_ATTENDANCE_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  list: [],
  listAttend: [],
  updatedList: [],
  loading: false,
  error: null,
};

const attendances = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_ATTENDANCES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_ATTENDANCES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_USER_ATTENDANCE_SUCCESS:
      return {
        ...state,
        list: [action.payload, ...state.list],
        loading: false,
      };
    case ADD_USER_ATTENDANCE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOAD_USER_ATTENDANCE_SUCCESS:
      return {
        ...state,
        listAttend: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_USER_ATTENDANCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ATTENDANCE_SUCCESS:
      return {
        ...state,
        updatedList: action.payload,
        error: null,
        loading: false,
      };
    case UPDATE_ATTENDANCE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default attendances;
