import React from 'react';

import ns from './ns.json';
import Settings from './Settings.jsx';
import ChildContainer from '../../Child-Container.jsx';


export function ShowSettings() {
  return (
    <ChildContainer>
      <div className={ `${ns}-container` }>
        <Settings />
      </div>
    </ChildContainer>
  );
}
ShowSettings.displayName = 'ShowSettings';

export default ShowSettings;
