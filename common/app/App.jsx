import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import { ToastMessage, ToastContainer } from 'react-toastr';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { contain } from 'redux-epic';
import { createSelector } from 'reselect';

import {
  fetchUser,
  initWindowHeight,
  updateNavHeight
} from './redux/actions';

import Nav from './components/Nav';

const toastMessageFactory = React.createFactory(ToastMessage.animation);

const mapStateToProps = createSelector(
  state => state.app,
  ({
    username,
    points,
    picture,
    toast
  }) => ({
    username,
    points,
    picture,
    toast
  })
);

const fetchContainerOptions = {
  fetchAction: 'fetchUser',
  isPrimed({ username }) {
    return !!username;
  }
};

// export plain class for testing
export class FreeCodeCamp extends React.Component {
  static displayName = 'FreeCodeCamp';

  static propTypes = {
    children: PropTypes.node,
    username: PropTypes.string,
    points: PropTypes.number,
    picture: PropTypes.string,
    toast: PropTypes.object,
    updateNavHeight: PropTypes.func,
    initWindowHeight: PropTypes.func
  };

  componentWillReceiveProps({ toast: nextToast = {} }) {
    const { toast = {} } = this.props;
    if (toast.id !== nextToast.id) {
      this.refs.toaster[nextToast.type || 'success'](
        nextToast.message,
        nextToast.title,
        {
          closeButton: true,
          timeOut: 10000
        }
      );
    }
  }

  componentDidMount() {
    this.props.initWindowHeight();
  }

  render() {
    const { username, points, picture, updateNavHeight } = this.props;
    const navProps = { username, points, picture, updateNavHeight };

    return (
      <div>
        <Nav { ...navProps }/>
        <Row>
          { this.props.children }
        </Row>
        <ToastContainer
          className='toast-bottom-right'
          ref='toaster'
          toastMessageFactory={ toastMessageFactory } />
      </div>
    );
  }
}

const wrapComponent = compose(
  // connect Component to Redux Store
  connect(mapStateToProps, { initWindowHeight, updateNavHeight, fetchUser }),
  // handles prefetching data
  contain(fetchContainerOptions)
);

export default wrapComponent(FreeCodeCamp);
