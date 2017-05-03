// createNameIdMap(entities: Object) => Object
export default function createNameIdMap(entities) {
  const { challenge } = entities;
  return {
    ...entities,
    challengeIdToName: Object.keys(challenge)
      .reduce((map, challengeName) => {
        map[challenge[challengeName].id] = challenge[challengeName].dashedName;
        return map;
      }, {})
  };
}
