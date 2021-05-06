import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Prism from 'prismjs';

const prismLang = {
  css: 'css',
  js: 'javascript',
  jsx: 'javascript',
  html: 'markup'
};

const SolutionViewer = ({
  files,
  solution = '// The solution is not available for this project'
}) =>
  files && Array.isArray(files) && files.length ? (
    files.map(file => (
      <Card className='solution-viewer' key={file.ext} variant='primary'>
        <Card.Heading>{file.ext.toUpperCase()}</Card.Heading>
        <Card.Body>
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
        </Card.Body>
      </Card>
    ))
  ) : (
    <Card
      className='solution-viewer'
      key={solution.slice(0, 10)}
      variant='primary'
    >
      <Card.Heading>JS</Card.Heading>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );

SolutionViewer.displayName = 'SolutionViewer';
SolutionViewer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  solution: PropTypes.string
};

export default SolutionViewer;
