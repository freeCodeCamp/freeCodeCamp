type CreateStepOptions = {
  projectPath: string;
  stepNum: number;
  challengeSeeds: Record<string, unknown>;
  stepBetween: boolean;
};

export declare function createStepFile(options: CreateStepOptions): string;

// TODO: the rest of the functions
