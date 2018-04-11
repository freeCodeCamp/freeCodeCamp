import React, { Component } from 'react';
import Link from 'gatsby-link';

import Auth from '../../auth';

const auth = new Auth();

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  login() {
    auth.login();

    this.setState({
      authenticated: auth.isAuthenticated()
    });
  }

  logout() {
    auth.logout();

    this.setState({
      authenticated: auth.isAuthenticated()
    });
  }

  componentDidMount() {
    // this.setState({
    //   authenticated: auth.isAuthenticated()
    // });
  }

  render() {
    return (
      <div
        style={{
          background: '#006400',
          marginBottom: '0.45rem'
        }}
        >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960
          }}
          >
          <h1 style={{ margin: 0 }}>
            <Link
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
              to='/'
              >
              freeCodeCamp
            </Link>
          </h1>
          {this.state.authenticated ? (
            <span>
              <a
                href='#'
                onClick={this.logout.bind(this)}
                style={{
                  boxShadow: 'none',
                  lineHeight: '37px',
                  color: '#fff'
                }}
                >
                Log Out
                {auth.getUserName() && <span> ({auth.getUserName()})</span>}
              </a>
            </span>
          ) : (
            <span>
              <a
                href='#'
                onClick={this.login.bind(this)}
                style={{
                  boxShadow: 'none',
                  lineHeight: '37px',
                  color: '#fff'
                }}
                >
                Log In
              </a>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
