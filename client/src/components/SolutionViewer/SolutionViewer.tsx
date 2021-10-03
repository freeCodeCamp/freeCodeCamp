import { Panel } from '@freecodecamp/react-bootstrap';
import Prism from 'prismjs';
import React from 'react';

import { ChallengeFiles, CompletedChallenge } from '../../redux/prop-types';

const prismLang = {
  css: 'css',
  js: 'javascript',
  jsx: 'javascript',
  html: 'markup'
};

interface Props {
  challengeFiles: ChallengeFiles;
  solution: CompletedChallenge['solution'];
}

const SolutionViewer = ({ challengeFiles, solution }: Props): JSX.Element => {
  const localSolution: string =
    solution || '// The solution is not available for this project';
  return challengeFiles?.length ? (
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
      key={localSolution.slice(0, 10)}
    >
      <Panel.Heading>JS</Panel.Heading>
      <Panel.Body>
        <pre>
          <code
            className='language-markup'
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                localSolution.trim(),
                Prism.languages.js,
                'javascript'
              )
            }}
          />
        </pre>
      </Panel.Body>
    </Panel>
  );
};

SolutionViewer.displayName = 'SolutionViewer';

export default SolutionViewer;
