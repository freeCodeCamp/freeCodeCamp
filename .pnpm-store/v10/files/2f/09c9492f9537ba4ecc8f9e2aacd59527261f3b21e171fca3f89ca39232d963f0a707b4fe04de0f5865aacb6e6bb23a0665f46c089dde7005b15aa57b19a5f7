/**
 * Copyright (c) 2016 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IOptionsService } from 'common/services/Services';
import { ICharSizeService } from 'browser/services/Services';
import { Disposable } from 'vs/base/common/lifecycle';
import { Emitter } from 'vs/base/common/event';

export class CharSizeService extends Disposable implements ICharSizeService {
  public serviceBrand: undefined;

  public width: number = 0;
  public height: number = 0;
  private _measureStrategy: IMeasureStrategy;

  public get hasValidSize(): boolean { return this.width > 0 && this.height > 0; }

  private readonly _onCharSizeChange = this._register(new Emitter<void>());
  public readonly onCharSizeChange = this._onCharSizeChange.event;

  constructor(
    document: Document,
    parentElement: HTMLElement,
    @IOptionsService private readonly _optionsService: IOptionsService
  ) {
    super();
    try {
      this._measureStrategy = this._register(new TextMetricsMeasureStrategy(this._optionsService));
    } catch {
      this._measureStrategy = this._register(new DomMeasureStrategy(document, parentElement, this._optionsService));
    }
    this._register(this._optionsService.onMultipleOptionChange(['fontFamily', 'fontSize'], () => this.measure()));
  }

  public measure(): void {
    const result = this._measureStrategy.measure();
    if (result.width !== this.width || result.height !== this.height) {
      this.width = result.width;
      this.height = result.height;
      this._onCharSizeChange.fire();
    }
  }
}

interface IMeasureStrategy {
  measure(): Readonly<IMeasureResult>;
}

interface IMeasureResult {
  width: number;
  height: number;
}

const enum DomMeasureStrategyConstants {
  REPEAT = 32
}

abstract class BaseMeasureStategy extends Disposable implements IMeasureStrategy {
  protected _result: IMeasureResult = { width: 0, height: 0 };

  protected _validateAndSet(width: number | undefined, height: number | undefined): void {
    // If values are 0 then the element is likely currently display:none, in which case we should
    // retain the previous value.
    if (width !== undefined && width > 0 && height !== undefined && height > 0) {
      this._result.width = width;
      this._result.height = height;
    }
  }

  public abstract measure(): Readonly<IMeasureResult>;
}

class DomMeasureStrategy extends BaseMeasureStategy {
  private _measureElement: HTMLElement;

  constructor(
    private _document: Document,
    private _parentElement: HTMLElement,
    private _optionsService: IOptionsService
  ) {
    super();
    this._measureElement = this._document.createElement('span');
    this._measureElement.classList.add('xterm-char-measure-element');
    this._measureElement.textContent = 'W'.repeat(DomMeasureStrategyConstants.REPEAT);
    this._measureElement.setAttribute('aria-hidden', 'true');
    this._measureElement.style.whiteSpace = 'pre';
    this._measureElement.style.fontKerning = 'none';
    this._parentElement.appendChild(this._measureElement);
  }

  public measure(): Readonly<IMeasureResult> {
    this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily;
    this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`;

    // Note that this triggers a synchronous layout
    this._validateAndSet(Number(this._measureElement.offsetWidth) / DomMeasureStrategyConstants.REPEAT, Number(this._measureElement.offsetHeight));

    return this._result;
  }
}

class TextMetricsMeasureStrategy extends BaseMeasureStategy {
  private _canvas: OffscreenCanvas;
  private _ctx: OffscreenCanvasRenderingContext2D;

  constructor(
    private _optionsService: IOptionsService
  ) {
    super();
    // This will throw if any required API is not supported
    this._canvas = new OffscreenCanvas(100, 100);
    this._ctx = this._canvas.getContext('2d')!;
    const a = this._ctx.measureText('W');
    if (!('width' in a && 'fontBoundingBoxAscent' in a && 'fontBoundingBoxDescent' in a)) {
      throw new Error('Required font metrics not supported');
    }
  }

  public measure(): Readonly<IMeasureResult> {
    this._ctx.font = `${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;
    const metrics = this._ctx.measureText('W');
    this._validateAndSet(metrics.width, metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent);
    return this._result;
  }
}
