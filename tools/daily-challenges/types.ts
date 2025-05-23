export type QueryResult = {
  data: {
    allChallengeNode: {
      edges: {
        node: {
          challenge: Challenge;
        };
      }[];
    };
  };
};
