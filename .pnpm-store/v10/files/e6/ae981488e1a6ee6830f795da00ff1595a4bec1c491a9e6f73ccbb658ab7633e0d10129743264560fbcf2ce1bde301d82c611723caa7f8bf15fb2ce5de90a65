type OrCondition = {
  $or: ConditionInterface[];
};
type NorCondition = {
  $nor: ConditionInterface[];
};
type AndCondition = {
  $and: ConditionInterface[];
};
type NotCondition = {
  $not: ConditionInterface;
};
export type Operator =
  | "$in"
  | "$ini"
  | "$inGroup"
  | "$nin"
  | "$nini"
  | "$notInGroup"
  | "$gt"
  | "$gte"
  | "$lt"
  | "$lte"
  | "$regex"
  | "$regexi"
  | "$ne"
  | "$eq"
  | "$size"
  | "$elemMatch"
  | "$all"
  | "$alli"
  | "$not"
  | "$type"
  | "$exists"
  | "$vgt"
  | "$vgte"
  | "$vlt"
  | "$vlte"
  | "$vne"
  | "$veq";
export type VarType =
  | "string"
  | "number"
  | "boolean"
  | "array"
  | "object"
  | "null"
  | "undefined";
export type OperatorConditionValue = {
  $in?: (string | number)[];
  $ini?: (string | number)[];
  $inGroup?: string;
  $nin?: (string | number)[];
  $nini?: (string | number)[];
  $notInGroup?: string;
  $gt?: number | string;
  $gte?: number | string;
  $lt?: number | string;
  $lte?: number | string;
  $regex?: string;
  $regexi?: string;
  $ne?: number | string;
  $eq?: number | string;
  $exists?: boolean;
  $all?: ConditionValue[];
  $alli?: ConditionValue[];
  $size?: number | ConditionValue;
  $type?: VarType;
  $elemMatch?: ConditionInterface | OperatorConditionValue;
  $not?: ConditionValue;
};

export type ConditionValue =
  | OperatorConditionValue
  | string
  | number
  | boolean
  // eslint-disable-next-line
  | Array<any>
  // eslint-disable-next-line
  | Record<string, any>
  | null;

export type OperatorCondition = {
  [key: string]: ConditionValue;
};

export type ConditionInterface =
  | OrCondition
  | NorCondition
  | AndCondition
  | NotCondition
  | OperatorCondition;

export type ParentConditionInterface = {
  id: string;
  condition: ConditionInterface;
  gate?: boolean;
};

// eslint-disable-next-line
export type TestedObj = Record<string, any>;
