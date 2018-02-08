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

function SolutionViewer({ files }) {
  return (
    <div>
      <Helmet>
        <link href='/css/prism.css' rel='stylesheet' />
      </Helmet>
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
