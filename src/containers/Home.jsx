import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import Navbar from '../components/common/Navbar';
import { toggleSidebar } from '../store/actions/actionCreators';
import AddAttendance from './AddAttendance'
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = (props) => {
  const {
    history, currentUser, toggleSidebar,
  } = props;
  useEffect(() => {
    if (!currentUser) history.replace('/login');
  }, []);

  return (
    <div className="home-main-container">
      <div className="header">
        <Navbar
          title="welcome"
          rightIcon={(
            <IconContext.Provider value={{ className: 'home-search-icon' }}>
              <GoSearch />
            </IconContext.Provider>
          )}
          leftAction={toggleSidebar}
        />
      </div>
        <>
          <div className="home-counters-counter-wrapper d-flex flex-center">
              <h1>Welcome, Create your attendance</h1>
          </div>
          {' '}
           <AddAttendance />
        </>
    </div>
  );
};

Home.defaultProps = {
  currentUser: null,
};

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  toggleSidebar: () => toggleSidebar(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
