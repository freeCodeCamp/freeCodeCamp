/**
 * Copyright (c) 2022 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { ColorContrastCache } from 'browser/ColorContrastCache';
import { IThemeService } from 'browser/services/Services';
import { DEFAULT_ANSI_COLORS, IColorContrastCache, IColorSet, ReadonlyColorSet } from 'browser/Types';
import { color, css, NULL_COLOR } from 'common/Color';
import { Disposable } from 'vs/base/common/lifecycle';
import { IOptionsService, ITheme } from 'common/services/Services';
import { AllColorIndex, IColor, SpecialColorIndex } from 'common/Types';
import { Emitter } from 'vs/base/common/event';

interface IRestoreColorSet {
  foreground: IColor;
  background: IColor;
  cursor: IColor;
  ansi: IColor[];
}


const DEFAULT_FOREGROUND = css.toColor('#ffffff');
const DEFAULT_BACKGROUND = css.toColor('#000000');
const DEFAULT_CURSOR = css.toColor('#ffffff');
const DEFAULT_CURSOR_ACCENT = DEFAULT_BACKGROUND;
const DEFAULT_SELECTION = {
  css: 'rgba(255, 255, 255, 0.3)',
  rgba: 0xFFFFFF4D
};
const DEFAULT_OVERVIEW_RULER_BORDER = DEFAULT_FOREGROUND;

export class ThemeService extends Disposable implements IThemeService {
  public serviceBrand: undefined;

  private _colors: IColorSet;
  private _contrastCache: IColorContrastCache = new ColorContrastCache();
  private _halfContrastCache: IColorContrastCache = new ColorContrastCache();
  private _restoreColors!: IRestoreColorSet;

  public get colors(): ReadonlyColorSet { return this._colors; }

  private readonly _onChangeColors = this._register(new Emitter<ReadonlyColorSet>());
  public readonly onChangeColors = this._onChangeColors.event;

  constructor(
    @IOptionsService private readonly _optionsService: IOptionsService
  ) {
    super();

    this._colors = {
      foreground: DEFAULT_FOREGROUND,
      background: DEFAULT_BACKGROUND,
      cursor: DEFAULT_CURSOR,
      cursorAccent: DEFAULT_CURSOR_ACCENT,
      selectionForeground: undefined,
      selectionBackgroundTransparent: DEFAULT_SELECTION,
      selectionBackgroundOpaque: color.blend(DEFAULT_BACKGROUND, DEFAULT_SELECTION),
      selectionInactiveBackgroundTransparent: DEFAULT_SELECTION,
      selectionInactiveBackgroundOpaque: color.blend(DEFAULT_BACKGROUND, DEFAULT_SELECTION),
      scrollbarSliderBackground: color.opacity(DEFAULT_FOREGROUND, 0.2),
      scrollbarSliderHoverBackground: color.opacity(DEFAULT_FOREGROUND, 0.4),
      scrollbarSliderActiveBackground: color.opacity(DEFAULT_FOREGROUND, 0.5),
      overviewRulerBorder: DEFAULT_FOREGROUND,
      ansi: DEFAULT_ANSI_COLORS.slice(),
      contrastCache: this._contrastCache,
      halfContrastCache: this._halfContrastCache
    };
    this._updateRestoreColors();
    this._setTheme(this._optionsService.rawOptions.theme);

    this._register(this._optionsService.onSpecificOptionChange('minimumContrastRatio', () => this._contrastCache.clear()));
    this._register(this._optionsService.onSpecificOptionChange('theme', () => this._setTheme(this._optionsService.rawOptions.theme)));
  }

  /**
   * Sets the terminal's theme.
   * @param theme The  theme to use. If a partial theme is provided then default
   * colors will be used where colors are not defined.
   */
  private _setTheme(theme: ITheme = {}): void {
    const colors = this._colors;
    colors.foreground = parseColor(theme.foreground, DEFAULT_FOREGROUND);
    colors.background = parseColor(theme.background, DEFAULT_BACKGROUND);
    colors.cursor = color.blend(colors.background, parseColor(theme.cursor, DEFAULT_CURSOR));
    colors.cursorAccent = color.blend(colors.background, parseColor(theme.cursorAccent, DEFAULT_CURSOR_ACCENT));
    colors.selectionBackgroundTransparent = parseColor(theme.selectionBackground, DEFAULT_SELECTION);
    colors.selectionBackgroundOpaque = color.blend(colors.background, colors.selectionBackgroundTransparent);
    colors.selectionInactiveBackgroundTransparent = parseColor(theme.selectionInactiveBackground, colors.selectionBackgroundTransparent);
    colors.selectionInactiveBackgroundOpaque = color.blend(colors.background, colors.selectionInactiveBackgroundTransparent);
    colors.selectionForeground = theme.selectionForeground ? parseColor(theme.selectionForeground, NULL_COLOR) : undefined;
    if (colors.selectionForeground === NULL_COLOR) {
      colors.selectionForeground = undefined;
    }

    /**
     * If selection color is opaque, blend it with background with 0.3 opacity
     * Issue #2737
     */
    if (color.isOpaque(colors.selectionBackgroundTransparent)) {
      const opacity = 0.3;
      colors.selectionBackgroundTransparent = color.opacity(colors.selectionBackgroundTransparent, opacity);
    }
    if (color.isOpaque(colors.selectionInactiveBackgroundTransparent)) {
      const opacity = 0.3;
      colors.selectionInactiveBackgroundTransparent = color.opacity(colors.selectionInactiveBackgroundTransparent, opacity);
    }
    colors.scrollbarSliderBackground = parseColor(theme.scrollbarSliderBackground, color.opacity(colors.foreground, 0.2));
    colors.scrollbarSliderHoverBackground = parseColor(theme.scrollbarSliderHoverBackground, color.opacity(colors.foreground, 0.4));
    colors.scrollbarSliderActiveBackground = parseColor(theme.scrollbarSliderActiveBackground, color.opacity(colors.foreground, 0.5));
    colors.overviewRulerBorder = parseColor(theme.overviewRulerBorder, DEFAULT_OVERVIEW_RULER_BORDER);
    colors.ansi = DEFAULT_ANSI_COLORS.slice();
    colors.ansi[0] = parseColor(theme.black, DEFAULT_ANSI_COLORS[0]);
    colors.ansi[1] = parseColor(theme.red, DEFAULT_ANSI_COLORS[1]);
    colors.ansi[2] = parseColor(theme.green, DEFAULT_ANSI_COLORS[2]);
    colors.ansi[3] = parseColor(theme.yellow, DEFAULT_ANSI_COLORS[3]);
    colors.ansi[4] = parseColor(theme.blue, DEFAULT_ANSI_COLORS[4]);
    colors.ansi[5] = parseColor(theme.magenta, DEFAULT_ANSI_COLORS[5]);
    colors.ansi[6] = parseColor(theme.cyan, DEFAULT_ANSI_COLORS[6]);
    colors.ansi[7] = parseColor(theme.white, DEFAULT_ANSI_COLORS[7]);
    colors.ansi[8] = parseColor(theme.brightBlack, DEFAULT_ANSI_COLORS[8]);
    colors.ansi[9] = parseColor(theme.brightRed, DEFAULT_ANSI_COLORS[9]);
    colors.ansi[10] = parseColor(theme.brightGreen, DEFAULT_ANSI_COLORS[10]);
    colors.ansi[11] = parseColor(theme.brightYellow, DEFAULT_ANSI_COLORS[11]);
    colors.ansi[12] = parseColor(theme.brightBlue, DEFAULT_ANSI_COLORS[12]);
    colors.ansi[13] = parseColor(theme.brightMagenta, DEFAULT_ANSI_COLORS[13]);
    colors.ansi[14] = parseColor(theme.brightCyan, DEFAULT_ANSI_COLORS[14]);
    colors.ansi[15] = parseColor(theme.brightWhite, DEFAULT_ANSI_COLORS[15]);
    if (theme.extendedAnsi) {
      const colorCount = Math.min(colors.ansi.length - 16, theme.extendedAnsi.length);
      for (let i = 0; i < colorCount; i++) {
        colors.ansi[i + 16] = parseColor(theme.extendedAnsi[i], DEFAULT_ANSI_COLORS[i + 16]);
      }
    }
    // Clear our the cache
    this._contrastCache.clear();
    this._halfContrastCache.clear();
    this._updateRestoreColors();
    this._onChangeColors.fire(this.colors);
  }

  public restoreColor(slot?: AllColorIndex): void {
    this._restoreColor(slot);
    this._onChangeColors.fire(this.colors);
  }

  private _restoreColor(slot: AllColorIndex | undefined): void {
    // unset slot restores all ansi colors
    if (slot === undefined) {
      for (let i = 0; i < this._restoreColors.ansi.length; ++i) {
        this._colors.ansi[i] = this._restoreColors.ansi[i];
      }
      return;
    }
    switch (slot) {
      case SpecialColorIndex.FOREGROUND:
        this._colors.foreground = this._restoreColors.foreground;
        break;
      case SpecialColorIndex.BACKGROUND:
        this._colors.background = this._restoreColors.background;
        break;
      case SpecialColorIndex.CURSOR:
        this._colors.cursor = this._restoreColors.cursor;
        break;
      default:
        this._colors.ansi[slot] = this._restoreColors.ansi[slot];
    }
  }

  public modifyColors(callback: (colors: IColorSet) => void): void {
    callback(this._colors);
    // Assume the change happened
    this._onChangeColors.fire(this.colors);
  }

  private _updateRestoreColors(): void {
    this._restoreColors = {
      foreground: this._colors.foreground,
      background: this._colors.background,
      cursor: this._colors.cursor,
      ansi: this._colors.ansi.slice()
    };
  }
}

function parseColor(
  cssString: string | undefined,
  fallback: IColor
): IColor {
  if (cssString !== undefined) {
    try {
      return css.toColor(cssString);
    } catch {
      // no-op
    }
  }
  return fallback;
}
