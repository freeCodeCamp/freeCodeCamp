/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

const RENDER_DEBOUNCE_THRESHOLD_MS = 1000; // 1 Second

import { IRenderDebouncer } from 'browser/Types';

/**
 * Debounces calls to update screen readers to update at most once configurable interval of time.
 */
export class TimeBasedDebouncer implements IRenderDebouncer {
  private _rowStart: number | undefined;
  private _rowEnd: number | undefined;
  private _rowCount: number | undefined;

  // The last moment that the Terminal was refreshed at
  private _lastRefreshMs = 0;
  // Whether a trailing refresh should be triggered due to a refresh request that was throttled
  private _additionalRefreshRequested = false;

  private _refreshTimeoutID: number | undefined;

  constructor(
    private _renderCallback: (start: number, end: number) => void,
    private readonly _debounceThresholdMS = RENDER_DEBOUNCE_THRESHOLD_MS
  ) {
  }

  public dispose(): void {
    if (this._refreshTimeoutID) {
      clearTimeout(this._refreshTimeoutID);
    }
  }

  public refresh(rowStart: number | undefined, rowEnd: number | undefined, rowCount: number): void {
    this._rowCount = rowCount;
    // Get the min/max row start/end for the arg values
    rowStart = rowStart !== undefined ? rowStart : 0;
    rowEnd = rowEnd !== undefined ? rowEnd : this._rowCount - 1;
    // Set the properties to the updated values
    this._rowStart = this._rowStart !== undefined ? Math.min(this._rowStart, rowStart) : rowStart;
    this._rowEnd = this._rowEnd !== undefined ? Math.max(this._rowEnd, rowEnd) : rowEnd;

    // Only refresh if the time since last refresh is above a threshold, otherwise wait for
    // enough time to pass before refreshing again.
    const refreshRequestTime: number = performance.now();
    if (refreshRequestTime - this._lastRefreshMs >= this._debounceThresholdMS) {
      // Enough time has lapsed since the last refresh; refresh immediately
      this._lastRefreshMs = refreshRequestTime;
      this._innerRefresh();
    } else if (!this._additionalRefreshRequested) {
      // This is the first additional request throttled; set up trailing refresh
      const elapsed = refreshRequestTime - this._lastRefreshMs;
      const waitPeriodBeforeTrailingRefresh = this._debounceThresholdMS - elapsed;
      this._additionalRefreshRequested = true;

      this._refreshTimeoutID = window.setTimeout(() => {
        this._lastRefreshMs = performance.now();
        this._innerRefresh();
        this._additionalRefreshRequested = false;
        this._refreshTimeoutID = undefined; // No longer need to clear the timeout
      }, waitPeriodBeforeTrailingRefresh);
    }
  }

  private _innerRefresh(): void {
    // Make sure values are set
    if (this._rowStart === undefined || this._rowEnd === undefined || this._rowCount === undefined) {
      return;
    }

    // Clamp values
    const start = Math.max(this._rowStart, 0);
    const end = Math.min(this._rowEnd, this._rowCount - 1);

    // Reset debouncer (this happens before render callback as the render could trigger it again)
    this._rowStart = undefined;
    this._rowEnd = undefined;

    // Run render callback
    this._renderCallback(start, end);
  }
}

