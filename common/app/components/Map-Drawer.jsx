import React, { PropTypes } from 'react';
import NoSSR from 'react-no-ssr';

import Drawer from './Drawer.jsx';
import ShowMap from '../routes/challenges/components/map/Map.jsx';

export default class MapDrawer extends React.Component {
  static displayName = 'MapDrawer';
  static propTypes = {
    isOpen: PropTypes.bool,
    isAlreadyLoaded: PropTypes.bool,
    toggleMapDrawer: PropTypes.func
  };

  render() {
    const { isOpen, isAlreadyLoaded, toggleMapDrawer } = this.props;
    return (
      <Drawer
        closeDrawer={ toggleMapDrawer }
        isOpen={ isOpen }
        >
        <NoSSR>
          <div>
            { isAlreadyLoaded || isOpen ? <ShowMap /> : null }
          </div>
        </NoSSR>
      </Drawer>
    );
  }
}
