import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

import {
  loadAttendancesAsync,
} from '../store/thunks/attendancesThunk';
import { toggleSidebar } from '../store/actions/actionCreators';
import Navbar from '../components/common/Navbar';
import AttendanceList from './AttendanceList'
import Counter from '../components/common/Counter';
import UsersList from './UsersList';
import { loadUsersAsync, removeUserAsync } from '../store/thunks/usersThunk';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Dashboard = (props) => {
  const [currentTab, setCurrentTab] = useState('attendances');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const {
    attendances,
    history,
    currentUser,
    toggleSidebar,
    loadAttendances,
    loadUsers,
    users,
    loadingAttendances,
    loadingUsers,
  } = props;

  useEffect(() => {
    if (!currentUser) history.replace('/login');
    loadAttendances();
    loadUsers();
  }, []);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-header">
        <Navbar
          title="Administrator"
          rightIcon={(
            <IconContext.Provider value={{ className: 'home-search-icon' }}>
              <GoSearch />
            </IconContext.Provider>
          )}
          leftAction={toggleSidebar}
        />
        <div className="dashboard-tabs-wrapper d-flex flex-center">
          <ul className="d-flex flex-center tabs-wrapper flex-unit">
            <li className="flex-unit">
              <a
                href="#"
                className={
                  currentTab === 'attendances'
                    ? 'dashboard-tab d-flex flex-center active'
                    : 'dashboard-tab d-flex flex-center'
                }
                onClick={() => handleTabClick('attendances')}
              >
                Attendances
              </a>
            </li>
            <li className="flex-unit">
              <a
                href="#"
                className={
                  currentTab === 'users'
                    ? 'dashboard-tab d-flex flex-center active'
                    : 'dashboard-tab d-flex flex-center'
                }
                onClick={() => handleTabClick('users')}
              >
                Users
              </a>
            </li>
          </ul>
        </div>
      </div>
      {currentTab === 'attendances' ? (
        <div className="dashboard-attendances-list-wrapper">
          {loadingAttendances ? (
            <div className="loadin-spinner-wrapper d-flex flex-center">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <AttendanceList
                attendances={attendances}
                dashboard
                onIndexChange={handleIndexChange}
              />
              <div className="d-flex flex-center counter-container">
                <Counter max={attendances.length} min={currentIndex + 1}/>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="dashboard-users-list-wrapper">
          {loadingUsers ? (
            <div className="loadin-spinner-wrapper d-flex flex-center">
              <LoadingSpinner />
            </div>
          ) : (
            <UsersList
              users={users}
              currentUser={currentUser}
            />
          )}
        </div>
      )}
    </div>
  );
};

Dashboard.defaultProps = {
  currentUser: null,
};

Dashboard.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  attendances: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  loadAttendances: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeUser: PropTypes.func.isRequired,
  loadingAttendances: PropTypes.bool.isRequired,
  loadingUsers: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  attendances: state.attendances.list,
  currentUser: state.auth.currentUser,
  users: state.users.list,
  removeUser: state.users.removeUser,
  loadingAttendances: state.attendances.loading,
  loadingUsers: state.users.loading,
});

const mapDispatchToProps = {
  loadAttendances: () => loadAttendancesAsync(),
  toggleSidebar: () => toggleSidebar(),
  loadUsers: () => loadUsersAsync(),
  removeUser: (userId) => removeUserAsync(userId),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
