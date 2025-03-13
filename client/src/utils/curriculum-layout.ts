import { challengeTypes } from '../../../shared/config/challenge-types';

// Show a single project in a certification layout

const projectBasedChallengeTypes = [
  challengeTypes.frontEndProject,
  challengeTypes.backEndProject,
  challengeTypes.jsProject,
  challengeTypes.pythonProject,
  challengeTypes.codeAllyCert,
  challengeTypes.multifileCertProject,
  challengeTypes.exam,
  challengeTypes.codeAllyPractice,
  challengeTypes.multifilePythonCertProject,
  challengeTypes.lab,
  challengeTypes.jsLab
];

export const isProjectBased = (
  challengeType: number,
  blockDashedName: unknown = null
) => {
  // Is project based but should be collapsable, this differs from the
  // other projects which are not collapsable.
  if (blockDashedName === 'take-home-projects') return false;

  return projectBasedChallengeTypes.includes(challengeType);
};
