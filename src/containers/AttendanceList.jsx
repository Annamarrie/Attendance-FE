import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import Attendance from '../components/Attendance';

const AttendaceList = ({
  attendances, dashboard, onIndexChange,
}) => (
  <div className="attendance-list-main-container">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={(item) => onIndexChange(item.realIndex)}
      className="attendance-list-swiper"
    >
      {attendances?.allAttendances?.map((attendance) => (
          <Attendance attendance={attendance}  key={attendance.id} dashboard={dashboard} />
      ))}
    </Swiper>
  </div>
);

AttendaceList.defaultProps = {
  dashboard: false,
};

AttendaceList.propTypes = {
  attendances: PropTypes.arrayOf(PropTypes.any).isRequired,
  dashboard: PropTypes.bool,
  onIndexChange: PropTypes.func.isRequired,
};
export default AttendaceList;
