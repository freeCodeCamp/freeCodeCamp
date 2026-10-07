export declare const PROMPT_SUGGESTION_FLAG: "__isPromptSuggestion";
export declare function getPromptSuggestionHits({ hits, limit, }: {
    hits: Array<{
        objectID: string;
    } & Record<string, unknown>>;
    limit: number;
}): Array<{
    objectID: string;
} & Record<string, unknown>>;
export declare function isPromptSuggestion(item: unknown): item is {
    prompt: string;
    [PROMPT_SUGGESTION_FLAG]: true;
};
