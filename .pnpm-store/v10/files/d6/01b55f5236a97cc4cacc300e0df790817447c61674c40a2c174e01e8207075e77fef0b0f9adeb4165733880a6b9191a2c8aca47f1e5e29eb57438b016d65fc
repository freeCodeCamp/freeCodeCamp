/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IColor, IColorRGB } from 'common/Types';

let $r = 0;
let $g = 0;
let $b = 0;
let $a = 0;

export const NULL_COLOR: IColor = {
  css: '#00000000',
  rgba: 0
};

/**
 * Helper functions where the source type is "channels" (individual color channels as numbers).
 */
export namespace channels {
  export function toCss(r: number, g: number, b: number, a?: number): string {
    if (a !== undefined) {
      return `#${toPaddedHex(r)}${toPaddedHex(g)}${toPaddedHex(b)}${toPaddedHex(a)}`;
    }
    return `#${toPaddedHex(r)}${toPaddedHex(g)}${toPaddedHex(b)}`;
  }

  export function toRgba(r: number, g: number, b: number, a: number = 0xFF): number {
    // Note: The aggregated number is RGBA32 (BE), thus needs to be converted to ABGR32
    // on LE systems, before it can be used for direct 32-bit buffer writes.
    // >>> 0 forces an unsigned int
    return (r << 24 | g << 16 | b << 8 | a) >>> 0;
  }

  export function toColor(r: number, g: number, b: number, a?: number): IColor {
    return {
      css: channels.toCss(r, g, b, a),
      rgba: channels.toRgba(r, g, b, a)
    };
  }
}

/**
 * Helper functions where the source type is `IColor`.
 */
export namespace color {
  export function blend(bg: IColor, fg: IColor): IColor {
    $a = (fg.rgba & 0xFF) / 255;
    if ($a === 1) {
      return {
        css: fg.css,
        rgba: fg.rgba
      };
    }
    const fgR = (fg.rgba >> 24) & 0xFF;
    const fgG = (fg.rgba >> 16) & 0xFF;
    const fgB = (fg.rgba >> 8) & 0xFF;
    const bgR = (bg.rgba >> 24) & 0xFF;
    const bgG = (bg.rgba >> 16) & 0xFF;
    const bgB = (bg.rgba >> 8) & 0xFF;
    $r = bgR + Math.round((fgR - bgR) * $a);
    $g = bgG + Math.round((fgG - bgG) * $a);
    $b = bgB + Math.round((fgB - bgB) * $a);
    const css = channels.toCss($r, $g, $b);
    const rgba = channels.toRgba($r, $g, $b);
    return { css, rgba };
  }

  export function isOpaque(color: IColor): boolean {
    return (color.rgba & 0xFF) === 0xFF;
  }

  export function ensureContrastRatio(bg: IColor, fg: IColor, ratio: number): IColor | undefined {
    const result = rgba.ensureContrastRatio(bg.rgba, fg.rgba, ratio);
    if (!result) {
      return undefined;
    }
    return channels.toColor(
      (result >> 24 & 0xFF),
      (result >> 16 & 0xFF),
      (result >> 8  & 0xFF)
    );
  }

  export function opaque(color: IColor): IColor {
    const rgbaColor = (color.rgba | 0xFF) >>> 0;
    [$r, $g, $b] = rgba.toChannels(rgbaColor);
    return {
      css: channels.toCss($r, $g, $b),
      rgba: rgbaColor
    };
  }

  export function opacity(color: IColor, opacity: number): IColor {
    $a = Math.round(opacity * 0xFF);
    [$r, $g, $b] = rgba.toChannels(color.rgba);
    return {
      css: channels.toCss($r, $g, $b, $a),
      rgba: channels.toRgba($r, $g, $b, $a)
    };
  }

  export function multiplyOpacity(color: IColor, factor: number): IColor {
    $a = color.rgba & 0xFF;
    return opacity(color, ($a * factor) / 0xFF);
  }

  export function toColorRGB(color: IColor): IColorRGB {
    return [(color.rgba >> 24) & 0xFF, (color.rgba >> 16) & 0xFF, (color.rgba >> 8) & 0xFF];
  }
}

/**
 * Helper functions where the source type is "css" (string: '#rgb', '#rgba', '#rrggbb',
 * '#rrggbbaa').
 */
export namespace css {
  // Attempt to set get the shared canvas context
  let $ctx: CanvasRenderingContext2D | undefined;
  let $litmusColor: CanvasGradient | undefined;
  try {
    // This is guaranteed to run in the first window, so document should be correct
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d', {
      willReadFrequently: true
    });
    if (ctx) {
      $ctx = ctx;
      $ctx.globalCompositeOperation = 'copy';
      $litmusColor = $ctx.createLinearGradient(0, 0, 1, 1);
    }
  }
  catch {
    // noop
  }

  /**
   * Converts a css string to an IColor, this should handle all valid CSS color strings and will
   * throw if it's invalid. The ideal format to use is `#rrggbb[aa]` as it's the fastest to parse.
   *
   * Only `#rgb[a]`, `#rrggbb[aa]`, `rgb()` and `rgba()` formats are supported when run in a Node
   * environment.
   */
  export function toColor(css: string): IColor {
    // Formats: #rgb[a] and #rrggbb[aa]
    if (css.match(/#[\da-f]{3,8}/i)) {
      switch (css.length) {
        case 4: { // #rgb
          $r = parseInt(css.slice(1, 2).repeat(2), 16);
          $g = parseInt(css.slice(2, 3).repeat(2), 16);
          $b = parseInt(css.slice(3, 4).repeat(2), 16);
          return channels.toColor($r, $g, $b);
        }
        case 5: { // #rgba
          $r = parseInt(css.slice(1, 2).repeat(2), 16);
          $g = parseInt(css.slice(2, 3).repeat(2), 16);
          $b = parseInt(css.slice(3, 4).repeat(2), 16);
          $a = parseInt(css.slice(4, 5).repeat(2), 16);
          return channels.toColor($r, $g, $b, $a);
        }
        case 7: // #rrggbb
          return {
            css,
            rgba: (parseInt(css.slice(1), 16) << 8 | 0xFF) >>> 0
          };
        case 9: // #rrggbbaa
          return {
            css,
            rgba: parseInt(css.slice(1), 16) >>> 0
          };
      }
    }

    // Formats: rgb() or rgba()
    const rgbaMatch = css.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
    if (rgbaMatch) {
      $r = parseInt(rgbaMatch[1]);
      $g = parseInt(rgbaMatch[2]);
      $b = parseInt(rgbaMatch[3]);
      $a = Math.round((rgbaMatch[5] === undefined ? 1 : parseFloat(rgbaMatch[5])) * 0xFF);
      return channels.toColor($r, $g, $b, $a);
    }

    // Validate the context is available for canvas-based color parsing
    if (!$ctx || !$litmusColor) {
      throw new Error('css.toColor: Unsupported css format');
    }

    // Validate the color using canvas fillStyle
    // See https://html.spec.whatwg.org/multipage/canvas.html#fill-and-stroke-styles
    $ctx.fillStyle = $litmusColor;
    $ctx.fillStyle = css;
    if (typeof $ctx.fillStyle !== 'string') {
      throw new Error('css.toColor: Unsupported css format');
    }

    $ctx.fillRect(0, 0, 1, 1);
    [$r, $g, $b, $a] = $ctx.getImageData(0, 0, 1, 1).data;

    // Validate the color is non-transparent as color hue gets lost when drawn to the canvas
    if ($a !== 0xFF) {
      throw new Error('css.toColor: Unsupported css format');
    }

    // Extract the color from the canvas' fillStyle property which exposes the color value in rgba()
    // format
    // See https://html.spec.whatwg.org/multipage/canvas.html#serialisation-of-a-color
    return {
      rgba: channels.toRgba($r, $g, $b, $a),
      css
    };
  }
}

/**
 * Helper functions where the source type is "rgb" (number: 0xrrggbb).
 */
export namespace rgb {
  /**
   * Gets the relative luminance of an RGB color, this is useful in determining the contrast ratio
   * between two colors.
   * @param rgb The color to use.
   * @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
   */
  export function relativeLuminance(rgb: number): number {
    return relativeLuminance2(
      (rgb >> 16) & 0xFF,
      (rgb >> 8 ) & 0xFF,
      (rgb      ) & 0xFF);
  }

  /**
   * Gets the relative luminance of an RGB color, this is useful in determining the contrast ratio
   * between two colors.
   * @param r The red channel (0x00 to 0xFF).
   * @param g The green channel (0x00 to 0xFF).
   * @param b The blue channel (0x00 to 0xFF).
   * @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
   */
  export function relativeLuminance2(r: number, g: number, b: number): number {
    const rs = r / 255;
    const gs = g / 255;
    const bs = b / 255;
    const rr = rs <= 0.03928 ? rs / 12.92 : Math.pow((rs + 0.055) / 1.055, 2.4);
    const rg = gs <= 0.03928 ? gs / 12.92 : Math.pow((gs + 0.055) / 1.055, 2.4);
    const rb = bs <= 0.03928 ? bs / 12.92 : Math.pow((bs + 0.055) / 1.055, 2.4);
    return rr * 0.2126 + rg * 0.7152 + rb * 0.0722;
  }
}

/**
 * Helper functions where the source type is "rgba" (number: 0xrrggbbaa).
 */
export namespace rgba {
  export function blend(bg: number, fg: number): number {
    $a = (fg & 0xFF) / 0xFF;
    if ($a === 1) {
      return fg;
    }
    const fgR = (fg >> 24) & 0xFF;
    const fgG = (fg >> 16) & 0xFF;
    const fgB = (fg >> 8) & 0xFF;
    const bgR = (bg >> 24) & 0xFF;
    const bgG = (bg >> 16) & 0xFF;
    const bgB = (bg >> 8) & 0xFF;
    $r = bgR + Math.round((fgR - bgR) * $a);
    $g = bgG + Math.round((fgG - bgG) * $a);
    $b = bgB + Math.round((fgB - bgB) * $a);
    return channels.toRgba($r, $g, $b);
  }

  /**
   * Given a foreground color and a background color, either increase or reduce the luminance of the
   * foreground color until the specified contrast ratio is met. If pure white or black is hit
   * without the contrast ratio being met, go the other direction using the background color as the
   * foreground color and take either the first or second result depending on which has the higher
   * contrast ratio.
   *
   * `undefined` will be returned if the contrast ratio is already met.
   *
   * @param bgRgba The background color in rgba format.
   * @param fgRgba The foreground color in rgba format.
   * @param ratio The contrast ratio to achieve.
   */
  export function ensureContrastRatio(bgRgba: number, fgRgba: number, ratio: number): number | undefined {
    const bgL = rgb.relativeLuminance(bgRgba >> 8);
    const fgL = rgb.relativeLuminance(fgRgba >> 8);
    const cr = contrastRatio(bgL, fgL);
    if (cr < ratio) {
      if (fgL < bgL) {
        const resultA = reduceLuminance(bgRgba, fgRgba, ratio);
        const resultARatio = contrastRatio(bgL, rgb.relativeLuminance(resultA >> 8));
        if (resultARatio < ratio) {
          const resultB = increaseLuminance(bgRgba, fgRgba, ratio);
          const resultBRatio = contrastRatio(bgL, rgb.relativeLuminance(resultB >> 8));
          return resultARatio > resultBRatio ? resultA : resultB;
        }
        return resultA;
      }
      const resultA = increaseLuminance(bgRgba, fgRgba, ratio);
      const resultARatio = contrastRatio(bgL, rgb.relativeLuminance(resultA >> 8));
      if (resultARatio < ratio) {
        const resultB = reduceLuminance(bgRgba, fgRgba, ratio);
        const resultBRatio = contrastRatio(bgL, rgb.relativeLuminance(resultB >> 8));
        return resultARatio > resultBRatio ? resultA : resultB;
      }
      return resultA;
    }
    return undefined;
  }

  export function reduceLuminance(bgRgba: number, fgRgba: number, ratio: number): number {
    // This is a naive but fast approach to reducing luminance as converting to
    // HSL and back is expensive
    const bgR = (bgRgba >> 24) & 0xFF;
    const bgG = (bgRgba >> 16) & 0xFF;
    const bgB = (bgRgba >>  8) & 0xFF;
    let fgR = (fgRgba >> 24) & 0xFF;
    let fgG = (fgRgba >> 16) & 0xFF;
    let fgB = (fgRgba >>  8) & 0xFF;
    let cr = contrastRatio(rgb.relativeLuminance2(fgR, fgG, fgB), rgb.relativeLuminance2(bgR, bgG, bgB));
    while (cr < ratio && (fgR > 0 || fgG > 0 || fgB > 0)) {
      // Reduce by 10% until the ratio is hit
      fgR -= Math.max(0, Math.ceil(fgR * 0.1));
      fgG -= Math.max(0, Math.ceil(fgG * 0.1));
      fgB -= Math.max(0, Math.ceil(fgB * 0.1));
      cr = contrastRatio(rgb.relativeLuminance2(fgR, fgG, fgB), rgb.relativeLuminance2(bgR, bgG, bgB));
    }
    return (fgR << 24 | fgG << 16 | fgB << 8 | 0xFF) >>> 0;
  }

  export function increaseLuminance(bgRgba: number, fgRgba: number, ratio: number): number {
    // This is a naive but fast approach to increasing luminance as converting to
    // HSL and back is expensive
    const bgR = (bgRgba >> 24) & 0xFF;
    const bgG = (bgRgba >> 16) & 0xFF;
    const bgB = (bgRgba >>  8) & 0xFF;
    let fgR = (fgRgba >> 24) & 0xFF;
    let fgG = (fgRgba >> 16) & 0xFF;
    let fgB = (fgRgba >>  8) & 0xFF;
    let cr = contrastRatio(rgb.relativeLuminance2(fgR, fgG, fgB), rgb.relativeLuminance2(bgR, bgG, bgB));
    while (cr < ratio && (fgR < 0xFF || fgG < 0xFF || fgB < 0xFF)) {
      // Increase by 10% until the ratio is hit
      fgR = Math.min(0xFF, fgR + Math.ceil((255 - fgR) * 0.1));
      fgG = Math.min(0xFF, fgG + Math.ceil((255 - fgG) * 0.1));
      fgB = Math.min(0xFF, fgB + Math.ceil((255 - fgB) * 0.1));
      cr = contrastRatio(rgb.relativeLuminance2(fgR, fgG, fgB), rgb.relativeLuminance2(bgR, bgG, bgB));
    }
    return (fgR << 24 | fgG << 16 | fgB << 8 | 0xFF) >>> 0;
  }

  export function toChannels(value: number): [number, number, number, number] {
    return [(value >> 24) & 0xFF, (value >> 16) & 0xFF, (value >> 8) & 0xFF, value & 0xFF];
  }
}

export function toPaddedHex(c: number): string {
  const s = c.toString(16);
  return s.length < 2 ? '0' + s : s;
}

/**
 * Gets the contrast ratio between two relative luminance values.
 * @param l1 The first relative luminance.
 * @param l2 The first relative luminance.
 * @see https://www.w3.org/TR/WCAG20/#contrast-ratiodef
 */
export function contrastRatio(l1: number, l2: number): number {
  if (l1 < l2) {
    return (l2 + 0.05) / (l1 + 0.05);
  }
  return (l1 + 0.05) / (l2 + 0.05);
}
