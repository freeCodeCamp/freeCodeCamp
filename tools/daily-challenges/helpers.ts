import { MongoClient, ObjectId } from 'mongodb';
import { Challenge, QueryResult } from './types';

const GRAPHQL_ENDPOINT = 'http://localhost:8000/___graphql';

// Query graphQL - note that the main client needs to be running to query the challenges
export async function queryGraphQL(query: string) {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  const json = (await response.json()) as QueryResult;

  if (!json?.data?.allChallengeNode?.edges?.length) {
    throw new Error(
      'Failed to find any challenges with GraphQL query. The client needs to be running'
    );
  }

  return json;
}

export async function fetchChallenges(language: 'javascript' | 'python') {
  const query = `
query {
  allChallengeNode(
  filter: {challenge: {superBlock: {eq: "dev-playground"}, block: {eq: "daily-coding-challenges-${language}"}}}
  sort: {order: ASC, fields: challenge___challengeOrder}
  ) {
    edges {
      node {
        challenge {
          id
          title
          description
          tests {
              testString
              text
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

  const queryRes = await queryGraphQL(query);

  const challenges = queryRes.data.allChallengeNode.edges.map(
    ({ node }) => node.challenge
  );

  return challenges;
}

export function combineChallenges({
  jsChallenge,
  pyChallenge,
  challengeNumber,
  date
}: {
  jsChallenge: Challenge;
  pyChallenge: Challenge;
  challengeNumber: number;
  date: Date;
}) {
  const {
    id: jsId,
    title: jsTitle,
    description: jsDescription,
    tests: jsTests,
    challengeFiles: jsChallengeFiles
  } = jsChallenge;

  const {
    title: pyTitle,
    description: pyDescription,
    tests: pyTests,
    challengeFiles: pyChallengeFiles
  } = pyChallenge;

  if (jsTitle !== pyTitle) {
    throw new Error(
      `JavaScript and Python titles do not match for challenge ${challengeNumber}: "${jsTitle}" vs "${pyTitle}"`
    );
  }

  if (jsDescription !== pyDescription) {
    throw new Error(
      `JavaScript and Python descriptions do not match for challenge ${challengeNumber}`
    );
  }

  if (jsTests.length !== pyTests.length) {
    throw new Error(
      `JavaScript and Python do not have the same number of tests for challenge ${challengeNumber}: ${jsTests.length} JavaScript vs ${pyTests.length} Python tests`
    );
  }

  // Use the JS challenge info for the new challenge meta - e.g. id, title, description, etc
  const challengeData = {
    // **DO NOT CHANGE THE ID** it's used as the challenge ID - and what gets added to completedDailyCodingChallenges[]
    _id: new ObjectId(`${jsId}`),
    challengeNumber,
    title: jsTitle.replace(`Challenge ${challengeNumber}: `, ''),
    date,
    description: removeSection(jsDescription),
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

export async function handleError(err: unknown, client: MongoClient) {
  if (err) {
    console.error('Oh noes!! Error seeding Daily Challenges.');
    console.error(err);
    try {
      await client.close();
    } catch {
      // no-op
    } finally {
      process.exit(1);
    }
  }
}

// Remove the <section id="description"> that our parser adds.
export function removeSection(str: string) {
  return str
    .replace(/^<section id="description">\n?/, '')
    .replace(/\n?<\/section>$/, '');
}
