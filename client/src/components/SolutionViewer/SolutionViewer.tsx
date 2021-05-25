import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from '@freecodecamp/react-bootstrap';
import Prism from 'prismjs';
import { FileType } from '../../redux/propTypes';

const prismLang = {
  css: 'css',
  js: 'javascript',
  jsx: 'javascript',
  html: 'markup'
};

type PropTypes = {
  files: FileType[];
  solution: string;
};

const SolutionViewer = ({
  files,
  solution = '// The solution is not available for this project'
}: PropTypes): JSX.Element =>
  files && Array.isArray(files) && files.length ? (
    <>
      {files.map(file => (
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
      ))}
    </>
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

SolutionViewer.displayName = 'SolutionViewer';

export default SolutionViewer;
