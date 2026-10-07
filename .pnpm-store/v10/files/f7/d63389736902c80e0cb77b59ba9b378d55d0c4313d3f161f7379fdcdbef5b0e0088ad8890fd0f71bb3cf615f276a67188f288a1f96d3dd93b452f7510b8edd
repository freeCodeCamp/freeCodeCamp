declare type RecommendationBuilder = (name: string) => string;
export declare class CaseValidator {
    #private;
    constructor(expression: RegExp, ignorePatterns: RegExp[], recommendationBuilder?: RecommendationBuilder);
    getRecommendedName(name: string): string;
    validate(name: string): boolean;
}
export declare const getCaseValidator: (ruleName: string, ignorePattern?: string[]) => CaseValidator;
export {};
