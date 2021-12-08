import { Panel } from '@freecodecamp/react-bootstrap';
import Prism from 'prismjs';
import React from 'react';
import { ChallengeFile, ChallengeFiles } from '../../redux/prop-types';

type SolutionViewerProps = {
  challengeFiles: ChallengeFiles;
  solution?: string;
};

function SolutionViewer({
  challengeFiles,
  solution = '// The solution is not available for this project'
}: SolutionViewerProps): JSX.Element {
  return (
    <>
      {challengeFiles?.length ? (
        challengeFiles.map((challengeFile: ChallengeFile) => (
          <Panel
            bsStyle='primary'
            className='solution-viewer'
            key={challengeFile}
          >
            <Panel.Heading>{challengeFile.ext.toUpperCase()}</Panel.Heading>

            <Panel.Body>
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      challengeFile.contents.trim(),
                      Prism.languages[challengeFile.ext],
                      ''
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
      )}
    </>
  );
}
export default SolutionViewer;
