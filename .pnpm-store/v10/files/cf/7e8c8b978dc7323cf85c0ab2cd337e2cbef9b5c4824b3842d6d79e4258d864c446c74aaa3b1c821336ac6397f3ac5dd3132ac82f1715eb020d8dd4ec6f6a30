/**
 * Copyright (c) 2023 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IDisposable } from 'common/Types';
import { FontWeight } from 'common/services/Services';


export const enum WidthCacheSettings {
  /** sentinel for unset values in flat cache */
  FLAT_UNSET = -9999,
  /** size of flat cache, size-1 equals highest codepoint handled by flat */
  FLAT_SIZE = 256,
  /** char repeat for measuring */
  REPEAT = 32
}


const enum FontVariant {
  REGULAR = 0,
  BOLD = 1,
  ITALIC = 2,
  BOLD_ITALIC = 3
}


export class WidthCache implements IDisposable {
  // flat cache for regular variant up to CacheSettings.FLAT_SIZE
  // NOTE: ~4x faster access than holey (serving >>80% of terminal content)
  //       It has a small memory footprint (only 1MB for full BMP caching),
  //       still the sweet spot is not reached before touching 32k different codepoints,
  //       thus we store the remaining <<20% of terminal data in a holey structure.
  protected _flat = new Float32Array(WidthCacheSettings.FLAT_SIZE);

  // holey cache for bold, italic and bold&italic for any string
  // FIXME: can grow really big over time (~8.5 MB for full BMP caching),
  //        so a shared API across terminals is needed
  protected _holey: Map<string, number> | undefined;

  private _font = '';
  private _fontSize = 0;
  private _weight: FontWeight = 'normal';
  private _weightBold: FontWeight = 'bold';
  private _container: HTMLDivElement;
  private _measureElements: HTMLSpanElement[] = [];

  constructor(_document: Document, _helperContainer: HTMLElement) {
    this._container = _document.createElement('div');
    this._container.classList.add('xterm-width-cache-measure-container');
    this._container.setAttribute('aria-hidden', 'true');
    // SP should stack in spans
    this._container.style.whiteSpace = 'pre';
    // avoid undercuts in non-monospace fonts from kerning
    this._container.style.fontKerning = 'none';

    const regular = _document.createElement('span');
    regular.classList.add('xterm-char-measure-element');

    const bold = _document.createElement('span');
    bold.classList.add('xterm-char-measure-element');
    bold.style.fontWeight = 'bold';

    const italic = _document.createElement('span');
    italic.classList.add('xterm-char-measure-element');
    italic.style.fontStyle = 'italic';

    const boldItalic = _document.createElement('span');
    boldItalic.classList.add('xterm-char-measure-element');
    boldItalic.style.fontWeight = 'bold';
    boldItalic.style.fontStyle = 'italic';

    // NOTE: must be in order of FontVariant
    this._measureElements = [regular, bold, italic, boldItalic];
    this._container.appendChild(regular);
    this._container.appendChild(bold);
    this._container.appendChild(italic);
    this._container.appendChild(boldItalic);

    _helperContainer.appendChild(this._container);

    this.clear();
  }

  public dispose(): void {
    this._container.remove();           // remove elements from DOM
    this._measureElements.length = 0;   // release element refs
    this._holey = undefined;            // free cache memory via GC
  }

  /**
   * Clear the width cache.
   */
  public clear(): void {
    this._flat.fill(WidthCacheSettings.FLAT_UNSET);
    // .clear() has some overhead, re-assign instead (>3 times faster)
    this._holey = new Map<string, number>();
  }

  /**
   * Set the font for measuring.
   * Must be called for any changes on font settings.
   * Also clears the cache.
   */
  public setFont(font: string, fontSize: number, weight: FontWeight, weightBold: FontWeight): void {
    // skip if nothing changed
    if (font === this._font
      && fontSize === this._fontSize
      && weight === this._weight
      && weightBold === this._weightBold
    ) {
      return;
    }

    this._font = font;
    this._fontSize = fontSize;
    this._weight = weight;
    this._weightBold = weightBold;

    this._container.style.fontFamily = this._font;
    this._container.style.fontSize = `${this._fontSize}px`;
    this._measureElements[FontVariant.REGULAR].style.fontWeight = `${weight}`;
    this._measureElements[FontVariant.BOLD].style.fontWeight = `${weightBold}`;
    this._measureElements[FontVariant.ITALIC].style.fontWeight = `${weight}`;
    this._measureElements[FontVariant.BOLD_ITALIC].style.fontWeight = `${weightBold}`;

    this.clear();
  }

  /**
   * Get the render width for cell content `c` with current font settings.
   * `variant` denotes the font variant to be used.
   */
  public get(c: string, bold: boolean | number, italic: boolean | number): number {
    let cp = 0;
    if (!bold && !italic && c.length === 1 && (cp = c.charCodeAt(0)) < WidthCacheSettings.FLAT_SIZE) {
      if (this._flat[cp] !== WidthCacheSettings.FLAT_UNSET) {
        return this._flat[cp];
      }
      const width = this._measure(c, 0);
      if (width > 0) {
        this._flat[cp] = width;
      }
      return width;
    }
    let key = c;
    if (bold) key += 'B';
    if (italic) key += 'I';
    let width = this._holey!.get(key);
    if (width === undefined) {
      let variant = 0;
      if (bold) variant |= FontVariant.BOLD;
      if (italic) variant |= FontVariant.ITALIC;
      width = this._measure(c, variant);
      if (width > 0) {
        this._holey!.set(key, width);
      }
    }
    return width;
  }

  protected _measure(c: string, variant: FontVariant): number {
    const el = this._measureElements[variant];
    el.textContent = c.repeat(WidthCacheSettings.REPEAT);
    return el.offsetWidth / WidthCacheSettings.REPEAT;
  }
}
