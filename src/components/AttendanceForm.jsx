import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { GrClose } from 'react-icons/gr';
import AppForm from './common/AppForm';
import TextInput from './common/TextInput';
import SubmitBtn from './common/SubmitBtn';
import validationSchema from './validation/attendanceValidation';

const AttendanceForm = ({
  onSubmit, attendance, shown, onToggleAttendanceForm,
}) => {
  const handleSubmit = (values) => {
    onSubmit({ ...values});
    return onToggleAttendanceForm();
  };
  const {
    EntranceDate, EntranceTime, EntranceExitTime, id,
  } = attendance || {};
  return (
    <div
      className={
        shown
          ? 'attendance-form-main-container shown d-flex flex-center'
          : 'attendance-form-main-container d-flex flex-center'
      }
    >
      <button
        className="app-form-overylay"
        type="button"
        onClick={onToggleAttendanceForm}
      >
        {}
      </button>
      <div className="app-form-main-content d-flex flex-column">
        <button
          type="button"
          className="close-sidebar-btn"
          onClick={onToggleAttendanceForm}
        >
          <IconContext.Provider value={{ className: 'sidebar-close-icon' }}>
            <GrClose />
          </IconContext.Provider>
        </button>
        <div className="attendance-form-header d-flex flex-center text-center">
        </div>
        <AppForm
          initialValues={{
            EntranceDate: EntranceDate || '',
            EntranceTime: EntranceTime || '',
            EntranceExitTime: EntranceExitTime || '',
            id: id || '',
          }}
          validate={validationSchema}
          onSubmit={handleSubmit}
        >
          <form className="attendance-form flex-unit">
            <TextInput type="date" placeholder="Attendance EntranceDate" />
            <TextInput type="time" placeholder="Attendance EntranceTime" />
            <TextInput type="time" name="duration" placeholder="Attendance EntranceExitTime" />
            <div className="attendance-submit-btn-wrapper">
              <SubmitBtn label="Save attendance"  onSubmit={handleSubmit} />
            </div>
          </form>
        </AppForm>
      </div>
    </div>
  );
};

AttendanceForm.defaultProps = {
  attendance: {},
};

AttendanceForm.propTypes = {
  attendance: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired,
  shown: PropTypes.bool.isRequired,
  onToggleAttendanceForm: PropTypes.func.isRequired,
};

export default AttendanceForm;
