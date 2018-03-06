import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { addNS } from 'berkeleys-redux-utils';

import ns from './ns.json';
import Editor from './Editor.jsx';
import ChildContainer from '../../Child-Container.jsx';
import { showPreviewSelector, types } from '../../redux';
import SidePanel from '../../Side-Panel.jsx';
import Preview from '../../Preview.jsx';
import _Map from '../../../../Map';
import Panes from '../../../../Panes';
import { filesSelector } from '../../../../files';

const createModernEditorToggleType = fileKey =>
  types.toggleModernEditor + `(${fileKey})`;

const getFirstFileKey = _.flow(_.values, _.first, _.property('key'));

const propTypes = {
  nameToFileKey: PropTypes.object
};

const mapStateToProps = createSelector(
  filesSelector,
  files => {
    if (Object.keys(files).length === 1) {
      return { nameToFileKey: { Editor: getFirstFileKey(files) }};
    }
    return {
      nameToFileKey: _.reduce(files, (map, file) => {
        map[file.name] = file.key;
        return map;
      }, {})
    };
  }
);

const mapDispatchToProps = null;

export const mapStateToPanes = addNS(
  ns,
  createSelector(
    filesSelector,
    showPreviewSelector,
    (files, showPreview) => {
      // create panes map here
      // must include map
      // side panel
      // editors are created based on state
      // so pane component can have multiple panes based on state

      const panesMap = {
        [types.toggleMap]: 'Map',
        [types.toggleSidePanel]: 'Lesson'
      };

      // If there is more than one file show file name
      if (Object.keys(files).length > 1) {
        _.forEach(files, (file) => {
          panesMap[createModernEditorToggleType(file.fileKey)] = file.name;
        });
      } else {
        const key = getFirstFileKey(files);
        panesMap[createModernEditorToggleType(key)] = 'Editor';
      }

      if (showPreview) {
        panesMap[types.togglePreview] = 'Preview';
      }

      return panesMap;
    }
  )
);

const nameToComponent = {
  Map: _Map,
  Lesson: SidePanel,
  Preview: Preview
};

export function ShowModern({ nameToFileKey }) {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes
        render={ name => {
          const Comp = nameToComponent[name];
          if (Comp) {
            return <Comp />;
          }
          if (nameToFileKey[name]) {
            return <Editor fileKey={ nameToFileKey[name] } />;
          }
          return <span>Could not find Component for { name }</span>;
        }}
      />
    </ChildContainer>
  );
}

ShowModern.displayName = 'ShowModern';
ShowModern.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowModern);
