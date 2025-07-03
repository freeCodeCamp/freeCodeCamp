import {
  certSlugTypeMap,
  certIds
} from '../../../../shared/config/certification-settings';

const {
  legacyInfosecQaId,
  respWebDesignId,
  frontEndDevLibsId,
  jsAlgoDataStructId,
  dataVis2018Id,
  apisMicroservicesId
} = certIds;

const fullStackCertificateIds = [
  respWebDesignId,
  jsAlgoDataStructId,
  frontEndDevLibsId,
  dataVis2018Id,
  apisMicroservicesId,
  legacyInfosecQaId
];

/**
 * Checks if the given certification slug is known.
 *
 * @param certSlug - The certification slug to check.
 * @returns True if the certification slug is known, otherwise false.
 */
export function isKnownCertSlug(
  certSlug: string
): certSlug is keyof typeof certSlugTypeMap {
  return certSlug in certSlugTypeMap;
}

/**
 * Retrieves the completion date for the full stack certification, if it exists.
 *
 * @param completedChallenges - The array of completed challenges.
 * @param completedDate - The fallback completed date.
 * @returns The latest certification date or the completed date if no certification is found.
 */
export function getFallbackFullStackDate(
  completedChallenges: { id: string; completedDate: number }[],
  completedDate: number
) {
  const latestCertDate = completedChallenges
    .filter(chal => fullStackCertificateIds.includes(chal.id))
    .sort((a, b) => b.completedDate - a.completedDate)[0]?.completedDate;

  return latestCertDate ?? completedDate;
}
