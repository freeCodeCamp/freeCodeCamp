/** @deprecated */
export declare enum Markers {
    start = "/**",
    nostart = "/***",
    delim = "*",
    end = "*/"
}
export interface BlockMarkers {
    start: string;
    nostart: string;
    delim: string;
    end: string;
}
export interface Block {
    description: string;
    tags: Spec[];
    source: Line[];
    problems: Problem[];
}
export interface Spec {
    tag: string;
    name: string;
    default?: string;
    type: string;
    optional: boolean;
    description: string;
    problems: Problem[];
    source: Line[];
}
export interface Line {
    number: number;
    source: string;
    tokens: Tokens;
}
export interface Tokens {
    start: string;
    delimiter: string;
    postDelimiter: string;
    tag: string;
    postTag: string;
    name: string;
    postName: string;
    type: string;
    postType: string;
    description: string;
    end: string;
    lineEnd: string;
}
export interface Problem {
    code: 'unhandled' | 'custom' | 'source:startline' | 'spec:tag:prefix' | 'spec:type:unpaired-curlies' | 'spec:name:unpaired-brackets' | 'spec:name:empty-name' | 'spec:name:invalid-default' | 'spec:name:empty-default';
    message: string;
    line: number;
    critical: boolean;
}
