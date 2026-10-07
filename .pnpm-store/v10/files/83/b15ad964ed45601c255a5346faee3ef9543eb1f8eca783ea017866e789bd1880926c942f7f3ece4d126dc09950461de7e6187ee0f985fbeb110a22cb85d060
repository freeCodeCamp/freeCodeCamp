/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Disposable } from 'vs/base/common/lifecycle';
import { IAttributeData } from 'common/Types';
import { Buffer } from 'common/buffer/Buffer';
import { IBuffer, IBufferSet } from 'common/buffer/Types';
import { IBufferService, IOptionsService } from 'common/services/Services';
import { Emitter } from 'vs/base/common/event';

/**
 * The BufferSet represents the set of two buffers used by xterm terminals (normal and alt) and
 * provides also utilities for working with them.
 */
export class BufferSet extends Disposable implements IBufferSet {
  private _normal!: Buffer;
  private _alt!: Buffer;
  private _activeBuffer!: Buffer;

  private readonly _onBufferActivate = this._register(new Emitter<{ activeBuffer: IBuffer, inactiveBuffer: IBuffer }>());
  public readonly onBufferActivate = this._onBufferActivate.event;

  /**
   * Create a new BufferSet for the given terminal.
   */
  constructor(
    private readonly _optionsService: IOptionsService,
    private readonly _bufferService: IBufferService
  ) {
    super();
    this.reset();
    this._register(this._optionsService.onSpecificOptionChange('scrollback', () => this.resize(this._bufferService.cols, this._bufferService.rows)));
    this._register(this._optionsService.onSpecificOptionChange('tabStopWidth', () => this.setupTabStops()));
  }

  public reset(): void {
    this._normal = new Buffer(true, this._optionsService, this._bufferService);
    this._normal.fillViewportRows();

    // The alt buffer should never have scrollback.
    // See http://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h2-The-Alternate-Screen-Buffer
    this._alt = new Buffer(false, this._optionsService, this._bufferService);
    this._activeBuffer = this._normal;
    this._onBufferActivate.fire({
      activeBuffer: this._normal,
      inactiveBuffer: this._alt
    });

    this.setupTabStops();
  }

  /**
   * Returns the alt Buffer of the BufferSet
   */
  public get alt(): Buffer {
    return this._alt;
  }

  /**
   * Returns the currently active Buffer of the BufferSet
   */
  public get active(): Buffer {
    return this._activeBuffer;
  }

  /**
   * Returns the normal Buffer of the BufferSet
   */
  public get normal(): Buffer {
    return this._normal;
  }

  /**
   * Sets the normal Buffer of the BufferSet as its currently active Buffer
   */
  public activateNormalBuffer(): void {
    if (this._activeBuffer === this._normal) {
      return;
    }
    this._normal.x = this._alt.x;
    this._normal.y = this._alt.y;
    // The alt buffer should always be cleared when we switch to the normal
    // buffer. This frees up memory since the alt buffer should always be new
    // when activated.
    this._alt.clearAllMarkers();
    this._alt.clear();
    this._activeBuffer = this._normal;
    this._onBufferActivate.fire({
      activeBuffer: this._normal,
      inactiveBuffer: this._alt
    });
  }

  /**
   * Sets the alt Buffer of the BufferSet as its currently active Buffer
   */
  public activateAltBuffer(fillAttr?: IAttributeData): void {
    if (this._activeBuffer === this._alt) {
      return;
    }
    // Since the alt buffer is always cleared when the normal buffer is
    // activated, we want to fill it when switching to it.
    this._alt.fillViewportRows(fillAttr);
    this._alt.x = this._normal.x;
    this._alt.y = this._normal.y;
    this._activeBuffer = this._alt;
    this._onBufferActivate.fire({
      activeBuffer: this._alt,
      inactiveBuffer: this._normal
    });
  }

  /**
   * Resizes both normal and alt buffers, adjusting their data accordingly.
   * @param newCols The new number of columns.
   * @param newRows The new number of rows.
   */
  public resize(newCols: number, newRows: number): void {
    this._normal.resize(newCols, newRows);
    this._alt.resize(newCols, newRows);
    this.setupTabStops(newCols);
  }

  /**
   * Setup the tab stops.
   * @param i The index to start setting up tab stops from.
   */
  public setupTabStops(i?: number): void {
    this._normal.setupTabStops(i);
    this._alt.setupTabStops(i);
  }
}
