type StepOptions = {
  challengeId: string;
  challengeSeeds: unknown;
  stepBetween: boolean;
  stepNum: number;
};

export declare function getStepTemplate(options: StepOptions): string;
