type CreateStepOptions = {
  challengeSeeds: Record<string, unknown>;
  projectPath: string;
  stepBetween: boolean;
  stepNum: number;
};

export declare function createStepFile(options: CreateStepOptions): string;
export declare function reorderSteps(): void;
export declare function getChallengeSeeds(string): Record<string, unknown>;
