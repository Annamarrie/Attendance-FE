import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BiEdit } from 'react-icons/bi';

const Attendance = ({ attendance, dashboard }) => (
    <div className="attendance-main-wrapper d-flex flex-column">
      { dashboard && (
      <button type="button" className="attendance-delete-btn">
        <IconContext.Provider value={{ className: 'attendance-delete-trash-icon' }}>
          <Link to={`/attendance/${attendance.user.id}/edit`}>
            <BiEdit />
          </Link>
        </IconContext.Provider>
      </button>
      )}
      <div className="attendance-info-wrapper">
        <div className="attendance-author-duration d-flex flex-between">
            <div className="attendance-author-name d-flex flex-column">
            <h4 className="author-name">
                    {attendance.user?.email}
                    {' '}
                : User-Email
                  </h4>
            </div>
            <div className="attendance-author-name d-flex flex-column">
              <h4 className="author-name">
                {attendance.attendanceDate}
                {' '}
              : Entrance-Date
              </h4>
            </div>
          <div className="attendance-duration d-flex flex-center text-center m-4">
            {attendance.attendanceEntranceTime}
            {' '}
            : Entrance-Time
          </div>
          <div>
            {attendance.attendanceExitTime}
            {' '}
            : Exit Time
          </div>
        </div>
      </div>
    </div>
  );

Attendance.defaultProps = {
  dashboard: true,
};

Attendance.propTypes = {
  attendance: PropTypes.objectOf(PropTypes.any).isRequired,
  dashboard: PropTypes.bool,
};

export default Attendance;
