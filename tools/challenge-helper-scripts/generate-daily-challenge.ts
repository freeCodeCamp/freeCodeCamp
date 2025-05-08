/*
  Script to generate the daily challenge data from graphql using the challenges in the dev playground
*/

import ObjectID from 'bson-objectid';

// Enter the challenge title here
const CHALLENGE_TITLE = 'Base Check';

// If the challenge already exists, enter the ID here
const CHALLENGE_ID = '';

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

const queryJavaScript = `
query {
  allChallengeNode(filter: {challenge: {id: {eq: "6814d8e1516e86b171929de4"}}}) {
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

const queryPython = `
query {
  allChallengeNode(filter: {challenge: {id: {eq: "6814d93d516e86b171929de5"}}}) {
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

function removeSection(str: string) {
  return str
    .replace(/^<section id="(description|instructions)">\n?/, '')
    .replace(/\n?<\/section>$/, '');
}

async function fetchGraphQL() {
  try {
    const jsResponse = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: queryJavaScript })
    });

    const jsResult = (await jsResponse.json()) as QueryResult;
    const jsData = jsResult.data.allChallengeNode.edges[0].node.challenge;

    const pyResponse = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: queryPython })
    });

    const pyResult = (await pyResponse.json()) as QueryResult;
    const pyData = pyResult.data.allChallengeNode.edges[0].node.challenge;

    if (pyData.description !== jsData.description) {
      throw Error('JavaScript and Python descriptions do not match');
    }

    if (pyData.instructions !== jsData.instructions) {
      throw Error('JavaScript and Python instructions do not match');
    }

    const challengeData = {
      challengeId: CHALLENGE_ID || new ObjectID(),
      title: CHALLENGE_TITLE,
      description: removeSection(jsData.description),
      ...(jsData.instructions && {
        instructions: removeSection(jsData.instructions)
      }),
      javascript: {
        tests: jsData.fields.tests,
        challengeFiles: jsData.challengeFiles
      },
      python: {
        tests: pyData.fields.tests,
        challengeFiles: pyData.challengeFiles
      }
    };

    console.log(JSON.stringify(challengeData));
  } catch (err) {
    console.error('Error:', err);
  }
}

void fetchGraphQL();
