import { Switch, Route, Redirect } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Home from "../containers/Home";
import Login from "./auth/Login";
import Sidebar from "./Sidebar";
import SignUp from "./auth/SignUp";

import "react-toastify/dist/ReactToastify.css";
import Logout from "./auth/Logout";
import Dashboard from "../containers/Dashboard";
import AttendanceEdit from "./AttendanceEdit";

function App({ isAuthenticated }) {
  return (
    <div className='App'>
      <ToastContainer className='toast-container-custom' />
      {isAuthenticated && <Sidebar />}
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/attendance/:id/edit' component={AttendanceEdit} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/logout' component={Logout} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
