/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IRenderDimensions, IRenderer } from 'browser/renderer/shared/Types';
import { IColorSet, ILink, ReadonlyColorSet } from 'browser/Types';
import { ISelectionRedrawRequestEvent as ISelectionRequestRedrawEvent, ISelectionRequestScrollLinesEvent } from 'browser/selection/Types';
import { createDecorator } from 'common/services/ServiceRegistry';
import { AllColorIndex, IDisposable } from 'common/Types';
import type { Event } from 'vs/base/common/event';

export const ICharSizeService = createDecorator<ICharSizeService>('CharSizeService');
export interface ICharSizeService {
  serviceBrand: undefined;

  readonly width: number;
  readonly height: number;
  readonly hasValidSize: boolean;

  readonly onCharSizeChange: Event<void>;

  measure(): void;
}

export const ICoreBrowserService = createDecorator<ICoreBrowserService>('CoreBrowserService');
export interface ICoreBrowserService {
  serviceBrand: undefined;

  readonly isFocused: boolean;

  readonly onDprChange: Event<number>;
  readonly onWindowChange: Event<Window & typeof globalThis>;

  /**
   * Gets or sets the parent window that the terminal is rendered into. DOM and rendering APIs (e.g.
   * requestAnimationFrame) should be invoked in the context of this window. This should be set when
   * the window hosting the xterm.js instance changes.
   */
  window: Window & typeof globalThis;
  /**
   * The document of the primary window to be used to create elements when working with multiple
   * windows. This is defined by the documentOverride setting.
   */
  readonly mainDocument: Document;
  /**
   * Helper for getting the devicePixelRatio of the parent window.
   */
  readonly dpr: number;
}

export const IMouseService = createDecorator<IMouseService>('MouseService');
export interface IMouseService {
  serviceBrand: undefined;

  getCoords(event: {clientX: number, clientY: number}, element: HTMLElement, colCount: number, rowCount: number, isSelection?: boolean): [number, number] | undefined;
  getMouseReportCoords(event: MouseEvent, element: HTMLElement): { col: number, row: number, x: number, y: number } | undefined;
}

export const IRenderService = createDecorator<IRenderService>('RenderService');
export interface IRenderService extends IDisposable {
  serviceBrand: undefined;

  onDimensionsChange: Event<IRenderDimensions>;
  /**
   * Fires when buffer changes are rendered. This does not fire when only cursor
   * or selections are rendered.
   */
  onRenderedViewportChange: Event<{ start: number, end: number }>;
  /**
   * Fires on render
   */
  onRender: Event<{ start: number, end: number }>;
  onRefreshRequest: Event<{ start: number, end: number }>;

  dimensions: IRenderDimensions;

  addRefreshCallback(callback: FrameRequestCallback): number;

  refreshRows(start: number, end: number): void;
  clearTextureAtlas(): void;
  resize(cols: number, rows: number): void;
  hasRenderer(): boolean;
  setRenderer(renderer: IRenderer): void;
  handleDevicePixelRatioChange(): void;
  handleResize(cols: number, rows: number): void;
  handleCharSizeChanged(): void;
  handleBlur(): void;
  handleFocus(): void;
  handleSelectionChanged(start: [number, number] | undefined, end: [number, number] | undefined, columnSelectMode: boolean): void;
  handleCursorMove(): void;
  clear(): void;
}

export const ISelectionService = createDecorator<ISelectionService>('SelectionService');
export interface ISelectionService {
  serviceBrand: undefined;

  readonly selectionText: string;
  readonly hasSelection: boolean;
  readonly selectionStart: [number, number] | undefined;
  readonly selectionEnd: [number, number] | undefined;

  readonly onLinuxMouseSelection: Event<string>;
  readonly onRequestRedraw: Event<ISelectionRequestRedrawEvent>;
  readonly onRequestScrollLines: Event<ISelectionRequestScrollLinesEvent>;
  readonly onSelectionChange: Event<void>;

  disable(): void;
  enable(): void;
  reset(): void;
  setSelection(row: number, col: number, length: number): void;
  selectAll(): void;
  selectLines(start: number, end: number): void;
  clearSelection(): void;
  rightClickSelect(event: MouseEvent): void;
  shouldColumnSelect(event: KeyboardEvent | MouseEvent): boolean;
  shouldForceSelection(event: MouseEvent): boolean;
  refresh(isLinuxMouseSelection?: boolean): void;
  handleMouseDown(event: MouseEvent): void;
  isCellInSelection(x: number, y: number): boolean;
}

export const ICharacterJoinerService = createDecorator<ICharacterJoinerService>('CharacterJoinerService');
export interface ICharacterJoinerService {
  serviceBrand: undefined;

  register(handler: (text: string) => [number, number][]): number;
  deregister(joinerId: number): boolean;
  getJoinedCharacters(row: number): [number, number][];
}

export const IThemeService = createDecorator<IThemeService>('ThemeService');
export interface IThemeService {
  serviceBrand: undefined;

  readonly colors: ReadonlyColorSet;

  readonly onChangeColors: Event<ReadonlyColorSet>;

  restoreColor(slot?: AllColorIndex): void;
  /**
   * Allows external modifying of colors in the theme, this is used instead of {@link colors} to
   * prevent accidental writes.
   */
  modifyColors(callback: (colors: IColorSet) => void): void;
}


export const ILinkProviderService = createDecorator<ILinkProviderService>('LinkProviderService');
export interface ILinkProviderService extends IDisposable {
  serviceBrand: undefined;
  readonly linkProviders: ReadonlyArray<ILinkProvider>;
  registerLinkProvider(linkProvider: ILinkProvider): IDisposable;
}
export interface ILinkProvider {
  provideLinks(y: number, callback: (links: ILink[] | undefined) => void): void;
}
