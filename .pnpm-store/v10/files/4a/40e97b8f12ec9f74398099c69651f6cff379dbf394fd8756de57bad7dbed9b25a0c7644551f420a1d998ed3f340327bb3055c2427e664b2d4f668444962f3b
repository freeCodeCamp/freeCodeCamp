/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IDimensions, IRenderDimensions } from 'browser/renderer/shared/Types';

export function throwIfFalsy<T>(value: T | undefined | null): T {
  if (!value) {
    throw new Error('value must not be falsy');
  }
  return value;
}

export function isPowerlineGlyph(codepoint: number): boolean {
  // Only return true for Powerline symbols which require
  // different padding and should be excluded from minimum contrast
  // ratio standards
  return 0xE0A4 <= codepoint && codepoint <= 0xE0D6;
}

export function isRestrictedPowerlineGlyph(codepoint: number): boolean {
  return 0xE0B0 <= codepoint && codepoint <= 0xE0B7;
}

function isNerdFontGlyph(codepoint: number): boolean {
  return 0xE000 <= codepoint && codepoint <= 0xF8FF;
}

function isBoxOrBlockGlyph(codepoint: number): boolean {
  return 0x2500 <= codepoint && codepoint <= 0x259F;
}

export function isEmoji(codepoint: number): boolean {
  return (
    codepoint >= 0x1F600 && codepoint <= 0x1F64F || // Emoticons
    codepoint >= 0x1F300 && codepoint <= 0x1F5FF || // Misc Symbols and Pictographs
    codepoint >= 0x1F680 && codepoint <= 0x1F6FF || // Transport and Map
    codepoint >= 0x2600  && codepoint <= 0x26FF  || // Misc symbols
    codepoint >= 0x2700  && codepoint <= 0x27BF  || // Dingbats
    codepoint >= 0xFE00  && codepoint <= 0xFE0F  || // Variation Selectors
    codepoint >= 0x1F900 && codepoint <= 0x1F9FF || // Supplemental Symbols and Pictographs
    codepoint >= 0x1F1E6 && codepoint <= 0x1F1FF
  );
}

export function allowRescaling(codepoint: number | undefined, width: number, glyphSizeX: number, deviceCellWidth: number): boolean {
  return (
    // Is single cell width
    width === 1 &&
    // Glyph exceeds cell bounds, add 50% to avoid hurting readability by rescaling glyphs that
    // barely overlap
    glyphSizeX > Math.ceil(deviceCellWidth * 1.5) &&
    // Never rescale ascii
    codepoint !== undefined && codepoint > 0xFF &&
    // Never rescale emoji
    !isEmoji(codepoint) &&
    // Never rescale powerline or nerd fonts
    !isPowerlineGlyph(codepoint) && !isNerdFontGlyph(codepoint)
  );
}

export function treatGlyphAsBackgroundColor(codepoint: number): boolean {
  return isPowerlineGlyph(codepoint) || isBoxOrBlockGlyph(codepoint);
}

export function createRenderDimensions(): IRenderDimensions {
  return {
    css: {
      canvas: createDimension(),
      cell: createDimension()
    },
    device: {
      canvas: createDimension(),
      cell: createDimension(),
      char: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }
    }
  };
}

function createDimension(): IDimensions {
  return {
    width: 0,
    height: 0
  };
}

export function computeNextVariantOffset(cellWidth: number, lineWidth: number, currentOffset: number = 0): number {
  return (cellWidth - (Math.round(lineWidth) * 2 - currentOffset)) % (Math.round(lineWidth) * 2);
}
