"use strict";

exports.__esModule = true;
exports.calculateImageDimensions = calculateImageDimensions;
exports.validateAndNormalizeFormats = validateAndNormalizeFormats;
function validateAndNormalizeFormats(formats, sourceFormat) {
  const formatSet = new Set(formats);

  // convert auto in format of source image
  if (formatSet.has(`auto`)) {
    formatSet.delete(`auto`);
    formatSet.add(sourceFormat);
  }
  if (formatSet.has(`jpg`) && formatSet.has(`png`)) {
    throw new Error(`Cannot specify both JPG and PNG formats`);
  }
  return formatSet;
}

/**
 * Generate correct width and height like sharp will do
 * @see https://sharp.pixelplumbing.com/api-resize#resize
 */
function calculateImageDimensions(originalDimensions, {
  fit,
  width: requestedWidth,
  height: requestedHeight,
  aspectRatio: requestedAspectRatio
}) {
  // Calculate the eventual width/height of the image.
  let imageAspectRatio;
  if (requestedAspectRatio) {
    imageAspectRatio = requestedAspectRatio;
  } else {
    imageAspectRatio = originalDimensions.width / originalDimensions.height;
  }
  let width = requestedWidth;
  let height = requestedHeight;
  switch (fit) {
    case `inside`:
      {
        const widthOption = requestedWidth !== null && requestedWidth !== void 0 ? requestedWidth : Number.MAX_SAFE_INTEGER;
        const heightOption = requestedHeight !== null && requestedHeight !== void 0 ? requestedHeight : Number.MAX_SAFE_INTEGER;
        width = Math.min(widthOption, Math.round(heightOption * imageAspectRatio));
        height = Math.min(heightOption, Math.round(widthOption / imageAspectRatio));
        break;
      }
    case `outside`:
      {
        const widthOption = requestedWidth !== null && requestedWidth !== void 0 ? requestedWidth : 0;
        const heightOption = requestedHeight !== null && requestedHeight !== void 0 ? requestedHeight : 0;
        width = Math.max(widthOption, Math.round(heightOption * imageAspectRatio));
        height = Math.max(heightOption, Math.round(widthOption / imageAspectRatio));
        break;
      }
    case `fill`:
      {
        width = requestedWidth !== null && requestedWidth !== void 0 ? requestedWidth : originalDimensions.width;
        height = requestedHeight !== null && requestedHeight !== void 0 ? requestedHeight : originalDimensions.height;
        break;
      }
    default:
      {
        if (requestedWidth && !requestedHeight) {
          width = requestedWidth;
          height = Math.round(requestedWidth / imageAspectRatio);
        }
        if (requestedHeight && !requestedWidth) {
          width = Math.round(requestedHeight * imageAspectRatio);
          height = requestedHeight;
        }
      }
  }
  return {
    width: width,
    height: height,
    aspectRatio: width / height
  };
}