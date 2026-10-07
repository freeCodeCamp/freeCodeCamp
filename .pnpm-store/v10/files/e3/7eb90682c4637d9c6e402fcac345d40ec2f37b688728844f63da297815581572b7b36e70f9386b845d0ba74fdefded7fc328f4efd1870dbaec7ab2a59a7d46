export interface MathExpression {
  type: 'MathExpression';
  right: CalcNode;
  left: CalcNode;
  operator: '*' | '+' | '-' | '/';
}

export interface ParenthesizedExpression {
  type: 'ParenthesizedExpression';
  content: CalcNode;
}

export interface DimensionExpression {
  type:
    | 'LengthValue'
    | 'AngleValue'
    | 'TimeValue'
    | 'FrequencyValue'
    | 'PercentageValue'
    | 'ResolutionValue'
    | 'EmValue'
    | 'ExValue'
    | 'ChValue'
    | 'RemValue'
    | 'VhValue'
    | 'VwValue'
    | 'VminValue'
    | 'VmaxValue';
  value: number;
  unit: string;
}

export interface NumberExpression {
  type: 'Number';
  value: number;
}

export interface FunctionExpression {
  type: 'Function';
  value: string;
}

export type ValueExpression = DimensionExpression | NumberExpression;

export type CalcNode = MathExpression | ValueExpression | FunctionExpression | ParenthesizedExpression;

export interface Parser {
  parse: (arg: string) => CalcNode;
}

export const parser: Parser;
