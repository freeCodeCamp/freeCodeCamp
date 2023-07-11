import { Panel } from '@freecodecamp/react-bootstrap';
import Prism from 'prismjs';
import React from 'react';
import { ChallengeFile } from '../../redux/prop-types';

type Props = {
  challengeFiles: Solution[] | null;
  solution?: string;
};
type Solution = Pick<ChallengeFile, 'ext' | 'contents' | 'fileKey'>;

function SolutionViewer({ challengeFiles, solution }: Props): JSX.Element {
  const isLegacy = !challengeFiles || !challengeFiles.length;
  const solutions = isLegacy
    ? [
        {
          ext: 'js',
          contents:
            solution ?? '// The solution is not available for this project',
          fileKey: 'script.js'
        }
      ]
    : challengeFiles;

  return (
    <>
      {solutions.map(({ fileKey, ext, contents }) => (
        <Panel bsStyle='primary' className='solution-viewer' key={fileKey}>
          <Panel.Heading>{ext.toUpperCase()}</Panel.Heading>
          <Panel.Body>
            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    contents.trim(),
                    Prism.languages[ext],
                    ext
                  )
                }}
              />
            </pre>
          </Panel.Body>
        </Panel>
      ))}
    </>
  );
}
export default SolutionViewer;
