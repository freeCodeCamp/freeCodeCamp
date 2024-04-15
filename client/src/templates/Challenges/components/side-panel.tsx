import React, { useEffect, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Test } from '../../../redux/prop-types';

import { SuperBlocks } from '../../../../../shared/config/superblocks';
import { initializeMathJax } from '../../../utils/math-jax';
import { challengeTestsSelector } from '../redux/selectors';
import TestSuite from './test-suite';
import ToolPanel from './tool-panel';

import './side-panel.css';

const mapStateToProps = createSelector(
  challengeTestsSelector,
  (tests: Test[]) => ({
    tests
  })
);
interface SidePanelProps {
  block: string;
  challengeDescription: ReactElement;
  challengeTitle: ReactElement;
  guideUrl: string;
  instructionsPanelRef: React.RefObject<HTMLDivElement>;
  showToolPanel: boolean;
  superBlock: SuperBlocks;
  tests: Test[];
  videoUrl: string;
}

export function SidePanel({
  block,
  challengeDescription,
  challengeTitle,
  guideUrl,
  instructionsPanelRef,
  showToolPanel = false,
  superBlock,
  tests,
  videoUrl
}: SidePanelProps): JSX.Element {
  useEffect(() => {
    const mathJaxChallenge =
      superBlock === SuperBlocks.RosettaCode ||
      superBlock === SuperBlocks.ProjectEuler ||
      block === 'intermediate-algorithm-scripting';
    initializeMathJax(mathJaxChallenge);
  }, [block, superBlock]);

  return (
    <div
      className='instructions-panel'
      ref={instructionsPanelRef}
      tabIndex={-1}
    >
      {challengeTitle}
      {challengeDescription}
      {showToolPanel && <ToolPanel guideUrl={guideUrl} videoUrl={videoUrl} />}
      <TestSuite tests={tests} />
    </div>
  );
}

SidePanel.displayName = 'SidePanel';

export default connect(mapStateToProps)(SidePanel);
