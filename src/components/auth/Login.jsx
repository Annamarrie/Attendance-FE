import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SubmitBtn from '../common/SubmitBtn';
import AppForm from '../common/AppForm';
import AppInput from '../common/AppInput';
import { loginUserAsync } from '../../store/thunks/authThunk';
import signinValidationSchema from '../validation/signinValidation';

const Login = (props) => {
  useEffect(() => {
    const { currentUser, history } = props;
    return currentUser ? history.replace('/') : '';
  });
  const handleSubmit = (values) => {
    const { loginUser } = props;
    loginUser(values);
  };

  const { loading } = props;

  return (
    <div className="login-page-main-container d-flex flex-column">
      <div className="login-overlay" />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validate={signinValidationSchema}
      >
        <form className="login-page-main d-flex flex-column">
          <div className="login-header d-flex flex-center flex-column text-center">
            <h1>Sign in</h1>
            <p>
              Hey there, Welcome to Koa-frontend.
              <br />
              Let&apos;s Sign in to get access on the site.
            </p>
          </div>
          <AppInput type="email" name="email" placeholder="Email" />
          <AppInput type="password" name="password" placeholder="Password" />
          <SubmitBtn type="submit" label="Sign in" loading={loading} />
        </form>
      </AppForm>
      <div className="signup-details d-flex flex-center">
        Don&apos;t have an account yet?
        <Link to="/signup" className="sign-up-link">
          Sign up here
        </Link>
      </div>
    </div>
  );
};

Login.defaultProps = {
  currentUser: null,
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  currentUser: state.auth.currentUser,
});
const mapDispatchToProps = {
  loginUser: (user) => loginUserAsync(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
