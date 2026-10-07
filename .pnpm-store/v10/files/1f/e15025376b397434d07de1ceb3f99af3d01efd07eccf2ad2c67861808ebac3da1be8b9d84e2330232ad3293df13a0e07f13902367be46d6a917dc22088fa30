import { ImageFormat, ImageFit, WidthOrHeight } from "../types";
export declare function validateAndNormalizeFormats(formats: Array<ImageFormat>, sourceFormat: ImageFormat): Set<ImageFormat>;
/**
 * Generate correct width and height like sharp will do
 * @see https://sharp.pixelplumbing.com/api-resize#resize
 */
export declare function calculateImageDimensions(originalDimensions: {
    width: number;
    height: number;
}, { fit, width: requestedWidth, height: requestedHeight, aspectRatio: requestedAspectRatio, }: {
    fit: ImageFit;
    aspectRatio: number;
} & WidthOrHeight): {
    width: number;
    height: number;
    aspectRatio: number;
};
