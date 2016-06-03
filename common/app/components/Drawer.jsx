import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class Drawer extends React.Component {
  static displayName = 'Drawer';
  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    closeDrawer: PropTypes.func
  };

  render() {
    const { isOpen, closeDrawer, children } = this.props;
    const drawerClass = classnames({
      drawer: true,
      'is-collapsed': !isOpen
    });
    return (
      <aside className={ drawerClass }>
        <div className='drawer-action-bar'>
          <a
            aria-label='open map in new tab'
            className='drawer-action-item drawer-action-pop-out'
          />
          <button
            aria-label='close map aside'
            className='drawer-action-item drawer-action-collapse'
            onClick={ closeDrawer }
          />
        </div>
        <div className='drawer-content'>
          { children }
        </div>
      </aside>
    );
  }
}
