export declare enum TokenType {
    OR = "OR",
    AND = "AND",
    PIPE = "PIPE",
    Command = "Command",
    Argument = "Argument",
    String = "String",
    EnvVar = "EnvVar"
}
type Token = {
    type: TokenType.OR | TokenType.AND | TokenType.PIPE;
} | {
    type: TokenType.Command | TokenType.Argument | TokenType.String;
    value?: string;
} | {
    type: TokenType.EnvVar;
    value: Record<string, string>;
};
export declare function tokenize(input: string): Token[];
export {};
