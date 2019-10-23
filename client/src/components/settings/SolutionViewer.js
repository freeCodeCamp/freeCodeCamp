import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from '@freecodecamp/react-bootstrap';
import Prism from 'prismjs';
import Helmet from 'react-helmet';

import './solution-viewer.css';

const prismLang = {
  css: 'css',
  js: 'javascript',
  jsx: 'javascript',
  html: 'markup'
};

function SolutionViewer({
  files,
  solution = '// The solution is not available for this project'
}) {
  const solutions =
    files && Array.isArray(files) && files.length ? (
      files.map(file => (
        <Panel bsStyle='primary' className='solution-viewer' key={file.ext}>
          <Panel.Heading>{file.ext.toUpperCase()}</Panel.Heading>
          <Panel.Body>
            <pre>
              <code
                className={`language-${prismLang[file.ext]}`}
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    file.contents.trim(),
                    Prism.languages[prismLang[file.ext]]
                  )
                }}
              />
            </pre>
          </Panel.Body>
        </Panel>
      ))
    ) : (
      <Panel
        bsStyle='primary'
        className='solution-viewer'
        key={solution.slice(0, 10)}
      >
        <Panel.Heading>JS</Panel.Heading>
        <Panel.Body>
          <pre>
            <code
              className='language-markup'
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  solution.trim(),
                  Prism.languages.js,
                  'javascript'
                )
              }}
            />
          </pre>
        </Panel.Body>
      </Panel>
    );
  return (
    <div>
      <Helmet>
        <link href='/css/prism.css' rel='stylesheet' />
      </Helmet>
      {solutions}
    </div>
  );
}

SolutionViewer.displayName = 'SolutionViewer';
SolutionViewer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  solution: PropTypes.string
};

export default SolutionViewer;
