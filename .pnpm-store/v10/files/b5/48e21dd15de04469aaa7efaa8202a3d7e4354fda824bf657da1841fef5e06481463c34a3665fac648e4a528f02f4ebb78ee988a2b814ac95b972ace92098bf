export type AttachmentType = 'event.attachment' | 'event.minidump' | 'event.applecrashreport' | 'unreal.context' | 'unreal.logs' | 'event.view_hierarchy';
/**
 * An attachment to an event. This is used to upload arbitrary data to Sentry.
 *
 * Please take care to not add sensitive information in attachments.
 *
 * https://develop.sentry.dev/sdk/envelopes/#attachment
 */
export interface Attachment {
    /**
     * The attachment data. Can be a string or a binary data (byte array)
     */
    data: string | Uint8Array;
    /**
     * The name of the uploaded file without a path component
     */
    filename: string;
    /**
     * The content type of the attachment payload. Defaults to `application/octet-stream` if not specified.
     *
     * Any valid [media type](https://www.iana.org/assignments/media-types/media-types.xhtml) is allowed.
     */
    contentType?: string;
    /**
     * The type of the attachment. Defaults to `event.attachment` if not specified.
     */
    attachmentType?: AttachmentType;
}
//# sourceMappingURL=attachment.d.ts.map