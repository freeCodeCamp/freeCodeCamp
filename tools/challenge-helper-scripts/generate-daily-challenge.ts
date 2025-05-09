/*
  Script to generate the daily challenge data from graphql using the challenges in the dev playground superblock.
  Fill in the two values below and run the script to generate the data for the daily challenge database.
*/

// From challenge number in dev playground superblock - e.g. "1" in "JavaScript Challenge 1"
const CHALLENGE_NUMBER = 1;

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

const jsTitleRE = new RegExp(`^JavaScript Challenge ${CHALLENGE_NUMBER}:`);
const pyTitleRE = new RegExp(`^Python Challenge ${CHALLENGE_NUMBER}:`);

// Use the JS ID for the challenges
const queryJavaScript = `
query {
  allChallengeNode(filter: {challenge: {block: {eq: "daily-coding-challenges-javascript"}, title: {regex: ${jsTitleRE}}}}) {
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

const queryPython = `
query {
  allChallengeNode(filter: {challenge: {block: {eq: "daily-coding-challenges-python"}, title: {regex: ${pyTitleRE}}}}) {
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

    // todo: check title

    const challengeData = {
      challengeId: jsData.id,
      title: jsData.title.replace(
        `JavaScript Challenge ${CHALLENGE_NUMBER}: `,
        ''
      ),
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
