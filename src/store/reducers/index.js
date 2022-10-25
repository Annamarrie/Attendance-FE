import { combineReducers } from "redux";
import auth from "./auth";
import attendances from "./attendances";
import sidebar from "./sidebar";
import users from "./users";

const reducer = combineReducers({
  auth,
  attendances,
  sidebar,
  users,
});

export default reducer;
