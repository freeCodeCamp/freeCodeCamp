export interface ChallengeFile {
  contents: string;
  ext: string;
  name: string;
}

export interface Challenge {
  id: string;
  title: string;
  challengeFiles?: ChallengeFile[];
  [key: string]: unknown;
}

export interface CommentDictionary {
  [comment: string]: {
    [lang: string]: string;
  };
}

export function translateComments(
  text: string,
  lang: string,
  dict: CommentDictionary,
  codeLang: string
): { text: string };

export function translateCommentsInChallenge(
  challenge: Challenge,
  lang: string,
  dict: CommentDictionary
): Challenge;

export function translateGeneric(
  input: { text: string },
  config: {
    knownComments: string[];
    dict: CommentDictionary;
    lang: string;
  }
): { text: string };
