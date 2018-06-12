import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import Prism from 'prismjs';
import Helmet from 'react-helmet';

const prismLang = {
  css: 'css',
  js: 'javascript',
  jsx: 'javascript',
  html: 'markup'
};

function getContentString(file) {
  return file.trim() || '// We do not have the solution to this challenge';
}

function SolutionViewer({ files }) {
  const solutions = files && Array.isArray(files) ?
    files.map(file => (
      <Panel
        bsStyle='primary'
        className='solution-viewer'
        header={ file.ext.toUpperCase() }
        key={ file.ext }
        >
        <pre>
          <code
          className={ `language-${prismLang[file.ext]}` }
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                file.contents.trim(),
                Prism.languages[prismLang[file.ext]]
              )
            }}
          />
        </pre>
      </Panel>
    )) : (
      <Panel
        bsStyle='primary'
        className='solution-viewer'
        header='JS'
        key={ files.slice(0, 10) }
        >
        <pre>
          <code
          className='language-markup'
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                getContentString(files),
                Prism.languages.js
              )
            }}
          />
        </pre>
      </Panel>
    )
    ;
  return (
    <div>
      <Helmet>
        <link href='/css/prism.css' rel='stylesheet' />
      </Helmet>
      {
        solutions
      }
    </div>
  );
}

SolutionViewer.displayName = 'SolutionViewer';
SolutionViewer.propTypes = {
  files: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    PropTypes.string
  )
};

export default SolutionViewer;
