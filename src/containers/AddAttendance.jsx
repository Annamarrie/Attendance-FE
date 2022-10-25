import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AttendanceForm from '../components/AttendanceForm';
import {
    addUserAttendanceAsync,
  } from '../store/thunks/attendancesThunk';

const AddAttendance = (props) => {
    const [showAttendanceForm, setShowAttendanceForm] = useState(false);
    const {
        history,
        currentUser,
        addAttendances,
      } = props;

  useEffect(() => {
    if (!currentUser) history.replace('/');
  }, []);

  const handleToggleAttendanceForm = () => {
    setShowAttendanceForm(!showAttendanceForm);
  };

  const handleSubmitForm = (values) => {
    addAttendances(values);
  };

  return (
    <div className="dashboard-main-container">
        <AttendanceForm
        onSubmit={handleSubmitForm}
        shown={showAttendanceForm}
        onToggleAttendanceForm={handleToggleAttendanceForm}
        />
        <a
                href="#f"
                className="add-attendance-btn d-flex flex-center"
                onClick={handleToggleAttendanceForm}
            >
                Add Attendance
            </a>
    </div>
  );
};

AddAttendance.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    currentUser: PropTypes.objectOf(PropTypes.any),
    addAttendance: PropTypes.func.isRequired,
  };

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser, 
 })
  
const mapDispatchToProps = {
    addAttendances: (values) => addUserAttendanceAsync(values),
 };

export default connect(mapStateToProps, mapDispatchToProps)(AddAttendance);
