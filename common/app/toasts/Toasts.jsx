import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { NotificationStack } from 'react-notification';

import { removeToast } from './redux/actions';
import { submitChallenge } from '../routes/challenges/redux/actions';

const registeredActions = { submitChallenge };
const mapStateToProps = state => ({ toasts: state.toasts });
const barStyle = {
  fontSize: '2rem',
  // null values let our css set the style prop
  padding: null
};
const actionStyle = {
  fontSize: '2rem'
};
const addDispatchableActionsToToast = createSelector(
  state => state.toasts,
  state => state.dispatch,
  (toasts, dispatch) => toasts.map(({ position, actionCreator, ...toast }) => {
    const activeBarStyle = {};
    if (position !== 'left') {
      activeBarStyle.left = null;
      activeBarStyle.right = '1rem';
    }
    const onClick = registeredActions[actionCreator] ?
      () => dispatch(registeredActions[actionCreator]()) :
      null;
    return {
      ...toast,
      barStyle,
      activeBarStyle,
      actionStyle,
      onClick
    };
  })
);

export class Toasts extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleDismiss = this.handleDismiss.bind(this);
  }
  static displayName = 'Toasts';
  static propTypes = {
    toasts: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func
  };

  handleDismiss(notification) {
    this.props.dispatch(removeToast(notification));
  }

  render() {
    const { toasts = [], dispatch } = this.props;
    return (
      <NotificationStack
        notifications={
          addDispatchableActionsToToast({ toasts, dispatch })
        }
        onDismiss={ this.handleDismiss }
      />
    );
  }
}

export default connect(mapStateToProps)(Toasts);
