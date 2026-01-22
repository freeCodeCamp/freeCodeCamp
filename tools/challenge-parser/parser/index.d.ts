// TypeScript declaration file for challenge-parser/parser
// This module exports functions to parse challenge markdown files

type ChallengeFile = {
  name: string;
  contents: string;
  ext: string;
  editableRegionBoundaries: number[];
  head?: string;
  tail?: string;
};
export interface ParsedChallenge {
  id: string;
  title: string;
  challengeType: number;
  description?: string;
  instructions?: string;
  questions?: string[];
  challengeFiles?: ChallengeFile[];
  solutions?: {
    contents: string;
    ext: string;
    name: string;
  }[][];
  [key: string]: unknown; // Allow for additional properties that may be added by plugins
}

/**
 * Parses a markdown challenge file asynchronously
 * @param filename - Path to the markdown file to parse
 * @returns Promise that resolves to the parsed challenge data
 */
export function parseMD(filename: string): Promise<ParsedChallenge>;

/**
 * Parses a markdown challenge file synchronously
 * @param filename - Path to the markdown file to parse
 * @returns The parsed challenge data
 */
export function parseMDSync(filename: string): ParsedChallenge;
