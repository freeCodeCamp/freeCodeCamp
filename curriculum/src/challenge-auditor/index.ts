import { flatten } from 'lodash/fp';

import { availableLangs } from '../../../shared/config/i18n';
import { getChallengesForLang } from '../get-challenges';
import {
  SuperBlocks,
  getAuditedSuperBlocks
} from '../../../shared/config/curriculum';

// TODO: re-organise the types to a common 'types' folder that can be shared
// between the workspaces so we don't have to declare ChallengeNode here and in
// the client.

// This cannot be imported from the client, without causing tsc to attempt to
// compile the client (something it cannot do)
type ChallengeNode = {
  block: string;
  dashedName: string;
  superBlock: SuperBlocks;
  id: string;
  challengeType: number;
};

// Adding types for getChallengesForLang is possible, but not worth the effort
// at this time.

const getChallenges = async (lang: string) => {
  const curriculum = await getChallengesForLang(lang);
  return (
    Object.keys(curriculum)
      // @ts-expect-error - curriculum comes from a JS file.
      .map(key => curriculum[key].blocks)
      .reduce((challengeArray, superBlock) => {
        const challengesForBlock = Object.keys(superBlock).map(
          key => superBlock[key].challenges
        );
        return [...challengeArray, ...flatten(challengesForBlock)];
      }, []) as unknown as ChallengeNode[]
  );
};

void (async () => {
  let actionShouldFail = false;

  const langsToCheck = availableLangs.curriculum.filter(
    lang => String(lang) !== 'english'
  );
  for (const language of langsToCheck) {
    console.log(`\n=== ${language} ===`);
    const certs = getAuditedSuperBlocks({ language });

    const noDuplicateSlugs = await auditSlugs(language, certs);
    if (noDuplicateSlugs) {
      console.log(`All challenges pass.`);
    } else {
      actionShouldFail = true;
    }
  }
  process.exit(actionShouldFail ? 1 : 0);
})();

async function auditSlugs(lang: string, certs: SuperBlocks[]) {
  let auditPassed = true;
  const slugs = new Map<string, string>();
  const challenges = await getChallenges(lang);

  for (const challenge of challenges) {
    const { block, dashedName, superBlock } = challenge;
    const slug = `/learn/${superBlock}/${block}/${dashedName}`;
    // Skipping certifications
    const isCertification = challenge.challengeType === 7;
    if (certs.includes(superBlock) && !isCertification && slugs.has(slug)) {
      console.log(
        `${slug} appears more than once: ${slugs.get(slug) ?? ''} and ${
          challenge.id
        }`
      );
      auditPassed = false;
    }
    slugs.set(slug, challenge.id);
  }

  return auditPassed;
}
