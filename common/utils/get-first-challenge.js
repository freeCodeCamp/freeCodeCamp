import emptyProtector from '../app/utils/empty-protector';

export function checkMapData(
  {
    entities: {
      challenge,
      block,
      superBlock,
      challengeIdToName
    },
    result
  }
) {
  if (
    !challenge ||
    !block ||
    !superBlock ||
    !challengeIdToName ||
    !result ||
    !result.length
  ) {
    throw new Error(
      'entities not found, db may not be properly seeded. Crashing hard'
    );
  }
}
// getFirstChallenge(
//   map: {
//     entities: { challenge: Object, block: Object, superBlock: Object },
//     result: [...superBlockDashedName: String]
//   }
// ) => Challenge|Void
export function getFirstChallenge({
  entities: { superBlock, block, challenge },
  result
}) {
  return challenge[
    emptyProtector(block[
      emptyProtector(superBlock[
        result[0]
      ]).blocks[0]
    ]).challenges[0]
  ];
}
