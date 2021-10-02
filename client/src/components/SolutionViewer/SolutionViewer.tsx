import { Panel } from '@freecodecamp/react-bootstrap';
import Prism from 'prismjs';
import React from 'react';

import { ChallengeFiles } from '../../redux/prop-types';

const prismLang = {
  css: 'css',
  js: 'javascript',
  jsx: 'javascript',
  html: 'markup'
};

interface Props {
  challengeFiles: ChallengeFiles;
  solution: string;
}

const SolutionViewer = ({
  challengeFiles,
  solution = '// The solution is not available for this project'
}: Props): JSX.Element =>
  challengeFiles?.length ? (
    <>
      {challengeFiles.map(challengeFile => (
        <Panel
          bsStyle='primary'
          className='solution-viewer'
          key={challengeFile.ext}
        >
          <Panel.Heading>{challengeFile.ext.toUpperCase()}</Panel.Heading>
          <Panel.Body>
            <pre>
              <code
                className={`language-${prismLang[challengeFile.ext]}`}
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    challengeFile.contents.trim(),
                    Prism.languages[prismLang[challengeFile.ext]],
                    prismLang[challengeFile.ext]
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
