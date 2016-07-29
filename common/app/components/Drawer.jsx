import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class Drawer extends React.Component {
  static displayName = 'Drawer';
  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    closeDrawer: PropTypes.func,
    closeAria: PropTypes.string,
    newTabLink: PropTypes.string,
    newTabAria: PropTypes.string
  };

  render() {
    const {
      isOpen,
      closeDrawer,
      closeAria,
      children,
      newTabAria,
      newTabLink
    } = this.props;
    const drawerClass = classnames({
      drawer: true,
      'is-collapsed': !isOpen
    });
    return (
      <aside className={ drawerClass }>
        <div className='drawer-action-bar'>
          <a
            aria-label={ newTabAria }
            className='drawer-action-item drawer-action-pop-out'
            href={ newTabLink }
            target='_blank'
          />
          <button
            aria-label={ closeAria }
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
