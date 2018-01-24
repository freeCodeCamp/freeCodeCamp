import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

function SolutionViewer({ files }) {
  return (
    <div>
      {
        Object.keys(files)
          .map(key => files[key])
          .map(file => (
            <Panel
              bsStyle='primary'
              className='solution-viewer'
              header={ file.ext.toUpperCase() }
              key={ file.ext }
              >
              <pre>{file.contents.trim()}</pre>
            </Panel>
          ))
      }
    </div>
  );
}

SolutionViewer.displayName = 'SolutionViewer';
SolutionViewer.propTypes = {
  files: PropTypes.object
};

export default SolutionViewer;
