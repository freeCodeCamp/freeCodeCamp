/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Panel } from '@freecodecamp/react-bootstrap';
import Prism from 'prismjs';
import React from 'react';

interface solutionviewerProps {
  challengeFiles: [];
  solution: string;
}

function SolutionViewer({
  challengeFiles,
  solution = '// The solution is not available for this project'
}: solutionviewerProps): JSX.Element {
  return (
    <>
      {challengeFiles?.length ? (
        challengeFiles.map((challengeFile: string) => (
          <Panel
            bsStyle='primary'
            className='solution-viewer'
            key={challengeFile}
          >
            <Panel.Heading>{challengeFile.toUpperCase()}</Panel.Heading>

            <Panel.Body>
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      challengeFile.trim(),
                      Prism.languages[challengeFile],
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
