import ObjectID from "bson-objectid";

type StepOptions = {
  challengeId: ObjectID;
  challengeSeeds: unknown;
  stepBetween: boolean;
  stepNum: number;
};

export declare function getStepTemplate(options: StepOptions): string;
