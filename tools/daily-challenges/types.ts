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

export type Challenge = {
  id: string;
  title: string;
  date: Date;
  description: string;
  fields: {
    tests: {
      testString: string;
      text: string;
    }[];
  };
  challengeFiles: {
    contents: string;
    filekey: string;
  }[];
};
