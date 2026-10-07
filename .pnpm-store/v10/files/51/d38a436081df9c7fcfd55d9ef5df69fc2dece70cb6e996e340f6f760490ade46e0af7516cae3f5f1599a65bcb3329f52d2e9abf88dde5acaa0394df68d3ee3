/**
 * Inline media content source, with a potentially very large base64
 * blob or data: uri.
 */
export type ContentMedia = Record<string, unknown> & ({
    media_type: string;
    data: string;
} | {
    image_url: `data:${string}`;
} | {
    image_url: {
        url: `data:${string}`;
    };
} | {
    type: 'blob' | 'base64';
    content: string;
} | {
    b64_json: string;
} | {
    uri: `data:${string}`;
} | {
    type: 'input_audio';
    input_audio: {
        data: string;
    };
} | {
    type: 'file';
    file: {
        file_data?: string;
    };
});
/**
 * Check if a content part is an OpenAI/Anthropic media source
 */
export declare function isContentMedia(part: unknown): part is ContentMedia;
/**
 * Replace inline binary data in a single media content part with a placeholder.
 */
export declare function stripInlineMediaFromSingleMessage(part: ContentMedia): ContentMedia;
//# sourceMappingURL=mediaStripping.d.ts.map