/*
  Helper function to get the daily challenge data from the dev-playground superblock using GraphQL.
  The main client needs to be running with upcoming changes shown to get info from GraphQL
*/
import { ObjectId } from 'mongodb';

const GRAPHQL_ENDPOINT = 'http://localhost:8000/___graphql';

type QueryResult = {
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

type Challenge = {
  id: string;
  title: string;
  description: string;
  instructions?: string;
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

// Remove the <section id="description/instructions"> that our parser adds.
function removeSection(str: string) {
  return str
    .replace(/^<section id="(description|instructions)">\n?/, '')
    .replace(/\n?<\/section>$/, '');
}

// Query challenge from graphQL - note that the main client needs to be running with upcomingChanges shown.
async function queryGraphQL(query: string) {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  const json = (await response.json()) as QueryResult;

  if (!json?.data?.allChallengeNode?.edges?.length) {
    throw new Error('Failed to find challenge with GraphQL query');
  }

  const challenge = json.data.allChallengeNode.edges[0].node.challenge;
  return challenge;
}

export async function fetchChallenge(challengeNumber: number) {
  const jsTitleRE = `/^JavaScript Challenge ${challengeNumber}:/`;
  const pyTitleRE = `/^Python Challenge ${challengeNumber}:/`;

  const javaScriptQuery = `
query {
  allChallengeNode(filter: {challenge: {block: {eq: "daily-coding-challenges-javascript"}, title: {regex: "${jsTitleRE}" }}}) {
    edges {
      node {
        challenge {
          id
          title
          description
          instructions
          fields {
            tests {
              testString
              text
            }
          }
          challengeFiles {
            contents
            fileKey
          }
        }
      }
    }
  }
}
`;

  const pythonQuery = `
query {
  allChallengeNode(filter: {challenge: {block: {eq: "daily-coding-challenges-python"}, title: {regex: "${pyTitleRE}" }}}) {
    edges {
      node {
        challenge {
          description
          instructions
          fields {
            tests {
              testString
              text
            }
          }
          challengeFiles {
            contents
            fileKey
          }
        }
      }
    }
  }
}
`;

  const jsChallenge = await queryGraphQL(javaScriptQuery);
  const pyChallenge = await queryGraphQL(pythonQuery);

  if (pyChallenge.description !== jsChallenge.description) {
    throw Error('JavaScript and Python descriptions do not match');
  }

  if (pyChallenge.instructions !== jsChallenge.instructions) {
    throw Error('JavaScript and Python instructions do not match');
  }

  const {
    id,
    title,
    description,
    instructions,
    fields: { tests: jsTests },
    challengeFiles: jsChallengeFiles
  } = jsChallenge;

  const {
    fields: { tests: pyTests },
    challengeFiles: pyChallengeFiles
  } = pyChallenge;

  // Use the JS challenge info for the new challenge meta - e.g. title, description, etc
  // TODO: Add challenge date
  const challengeData = {
    _id: new ObjectId(`${id}`),
    title: title.replace(`JavaScript Challenge ${challengeNumber}: `, ''),
    description: removeSection(description),
    ...(instructions && {
      instructions: removeSection(instructions)
    }),
    javascript: {
      tests: jsTests,
      challengeFiles: jsChallengeFiles
    },
    python: {
      tests: pyTests,
      challengeFiles: pyChallengeFiles
    }
  };

  return challengeData;
}
