import emptyProtector from './empty-protector';

export function checkMapData({
  entities: { challenge, block, superBlock },
  result: { superBlocks }
}) {
  if (
    !challenge ||
    !block ||
    !superBlock ||
    !superBlocks ||
    !superBlocks.length
  ) {
    throw new Error('entities not found, db may not be properly seeded');
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
  result: { superBlocks }
}) {
  return challenge[
    emptyProtector(block[emptyProtector(superBlock[superBlocks[0]]).blocks[0]])
      .challenges[0]
  ];
}

// let challengeDashedName: String;
// createNameIdMap({
//  challenge: {
//    [...challengeDashedName ]: Challenge
// }) => {
//   challengeIdToName: {
//     [ ...challengeId ]: challengeDashedName
//   }
//  };
export function createNameIdMap({ challenge }) {
  return {
    challengeIdToName: Object.keys(challenge).reduce((map, challengeName) => {
      map[challenge[challengeName].id] = challenge[challengeName].dashedName;
      return map;
    }, {})
  };
}
// addNameIdMap(
//  map: { entities; Object, ...rest }
// ) => { ...rest, entities: Object };
export function addNameIdMap({ entities, ...rest }) {
  return {
    ...rest,
    entities: {
      ...entities,
      ...createNameIdMap(entities)
    }
  };
}
