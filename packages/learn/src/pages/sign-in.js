import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signIn } from '../redux/app';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signIn
    },
    dispatch
  );

const propTypes = {
  signIn: PropTypes.func.isRequired
};

class SignInPage extends PureComponent {
  constructor(...props) {
    super(...props);

    this.state = {
      userEmail: ''
    };
  }

  handleEmailChange = e => {
    e.persist();
    return this.setState(state => ({ ...state, userEmail: e.target.value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userEmail } = this.state;
    this.props.signIn(userEmail);
  };

  render() {
    const { userEmail } = this.state;
    console.log(window.location.origin);
    return (
      <div id='sigin-view'>
        <h2>Start coding</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name='userEmail'
            onChange={this.handleEmailChange}
            type='email'
            value={userEmail}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
SignInPage.displayName = 'SignInPage';
SignInPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
