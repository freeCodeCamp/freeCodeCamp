import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { NotificationStack } from 'react-notification';

import { removeToast } from './redux/actions';
import {
  submitChallenge,
  resetChallenge
} from '../routes/challenges/redux/actions';

const registeredActions = {
  submitChallenge,
  resetChallenge
};
const mapStateToProps = state => ({ toasts: state.toasts });
// we use styles here to overwrite those built into the library
// but there are some styles applied using
// regular css in /client/less/toastr.less
const barStyle = {
  fontSize: '2rem',
  // null values let our css set the style prop
  padding: null
};
const rightBarStyle = {
  ...barStyle,
  left: null,
  right: '-100%'
};
const actionStyle = {
  fontSize: '2rem'
};
const addDispatchableActionsToToast = createSelector(
  state => state.toasts,
  state => state.dispatch,
  (toasts, dispatch) => toasts.map(({ position, actionCreator, ...toast }) => {
    const activeBarStyle = {};
    let finalBarStyle = barStyle;
    if (position !== 'left') {
      activeBarStyle.left = null;
      activeBarStyle.right = '1rem';
      finalBarStyle = rightBarStyle;
    }
    const onClick = !registeredActions[actionCreator] ?
      () => {
        dispatch(removeToast(toast));
      } :
      () => {
        dispatch(registeredActions[actionCreator]());
        dispatch(removeToast(toast));
      };
    return {
      ...toast,
      barStyle: finalBarStyle,
      activeBarStyle,
      actionStyle,
      onClick
    };
  })
);
const propTypes = {
  dispatch: PropTypes.func,
  toasts: PropTypes.arrayOf(PropTypes.object)
};

export class Toasts extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleDismiss = this.handleDismiss.bind(this);
  }
  styleFactory(index, style) {
    return { ...style, bottom: `${4 + index * 8}rem` };
  }

  handleDismiss(notification) {
    this.props.dispatch(removeToast(notification));
  }

  render() {
    const { toasts = [], dispatch } = this.props;
    return (
      <NotificationStack
        activeBarStyle={ this.styleFactory }
        barStyle={ this.styleFactory }
        notifications={
          addDispatchableActionsToToast({ toasts, dispatch })
        }
        onDismiss={ this.handleDismiss }
      />
    );
  }
}

Toasts.displayName = 'Toasts';
Toasts.propTypes = propTypes;

export default connect(mapStateToProps)(Toasts);
