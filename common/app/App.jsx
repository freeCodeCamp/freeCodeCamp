import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import { ToastMessage, ToastContainer } from 'react-toastr';
import { contain } from 'thundercats-react';

import { Nav } from './components/Nav';

const toastMessageFactory = React.createFactory(ToastMessage.animation);

export default contain(
  {
    actions: ['appActions'],
    store: 'appStore',
    fetchAction: 'appActions.getUser',
    isPrimed({ username }) {
      return !!username;
    },
    map({
      username,
      points,
      picture,
      toast
    }) {
      return {
        username,
        points,
        picture,
        toast
      };
    },
    getPayload(props) {
      return {
        isPrimed: !!props.username
      };
    }
  },
  React.createClass({
    displayName: 'FreeCodeCamp',

    propTypes: {
      appActions: PropTypes.object,
      children: PropTypes.node,
      username: PropTypes.string,
      points: PropTypes.number,
      picture: PropTypes.string,
      toast: PropTypes.object
    },

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
    },

    render() {
      const { username, points, picture } = this.props;
      const navProps = { username, points, picture };
      return (
        <div>
          <Nav
            { ...navProps }/>
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
  })
);
