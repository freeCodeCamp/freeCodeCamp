/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ICoreBrowserService, IRenderService } from 'browser/services/Services';
import { Disposable, toDisposable } from 'vs/base/common/lifecycle';
import { IBufferService, IDecorationService, IInternalDecoration } from 'common/services/Services';

export class BufferDecorationRenderer extends Disposable {
  private readonly _container: HTMLElement;
  private readonly _decorationElements: Map<IInternalDecoration, HTMLElement> = new Map();

  private _animationFrame: number | undefined;
  private _altBufferIsActive: boolean = false;
  private _dimensionsChanged: boolean = false;

  constructor(
    private readonly _screenElement: HTMLElement,
    @IBufferService private readonly _bufferService: IBufferService,
    @ICoreBrowserService private readonly _coreBrowserService: ICoreBrowserService,
    @IDecorationService private readonly _decorationService: IDecorationService,
    @IRenderService private readonly _renderService: IRenderService
  ) {
    super();

    this._container = document.createElement('div');
    this._container.classList.add('xterm-decoration-container');
    this._screenElement.appendChild(this._container);

    this._register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations()));
    this._register(this._renderService.onDimensionsChange(() => {
      this._dimensionsChanged = true;
      this._queueRefresh();
    }));
    this._register(this._coreBrowserService.onDprChange(() => this._queueRefresh()));
    this._register(this._bufferService.buffers.onBufferActivate(() => {
      this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
    }));
    this._register(this._decorationService.onDecorationRegistered(() => this._queueRefresh()));
    this._register(this._decorationService.onDecorationRemoved(decoration => this._removeDecoration(decoration)));
    this._register(toDisposable(() => {
      this._container.remove();
      this._decorationElements.clear();
    }));
  }

  private _queueRefresh(): void {
    if (this._animationFrame !== undefined) {
      return;
    }
    this._animationFrame = this._renderService.addRefreshCallback(() => {
      this._doRefreshDecorations();
      this._animationFrame = undefined;
    });
  }

  private _doRefreshDecorations(): void {
    for (const decoration of this._decorationService.decorations) {
      this._renderDecoration(decoration);
    }
    this._dimensionsChanged = false;
  }

  private _renderDecoration(decoration: IInternalDecoration): void {
    this._refreshStyle(decoration);
    if (this._dimensionsChanged) {
      this._refreshXPosition(decoration);
    }
  }

  private _createElement(decoration: IInternalDecoration): HTMLElement {
    const element = this._coreBrowserService.mainDocument.createElement('div');
    element.classList.add('xterm-decoration');
    element.classList.toggle('xterm-decoration-top-layer', decoration?.options?.layer === 'top');
    element.style.width = `${Math.round((decoration.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`;
    element.style.height = `${(decoration.options.height || 1) * this._renderService.dimensions.css.cell.height}px`;
    element.style.top = `${(decoration.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height}px`;
    element.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;

    const x = decoration.options.x ?? 0;
    if (x && x > this._bufferService.cols) {
      // exceeded the container width, so hide
      element.style.display = 'none';
    }
    this._refreshXPosition(decoration, element);

    return element;
  }

  private _refreshStyle(decoration: IInternalDecoration): void {
    const line = decoration.marker.line - this._bufferService.buffers.active.ydisp;
    if (line < 0 || line >= this._bufferService.rows) {
      // outside of viewport
      if (decoration.element) {
        decoration.element.style.display = 'none';
        decoration.onRenderEmitter.fire(decoration.element);
      }
    } else {
      let element = this._decorationElements.get(decoration);
      if (!element) {
        element = this._createElement(decoration);
        decoration.element = element;
        this._decorationElements.set(decoration, element);
        this._container.appendChild(element);
        decoration.onDispose(() => {
          this._decorationElements.delete(decoration);
          element!.remove();
        });
      }
      element.style.display = this._altBufferIsActive ? 'none' : 'block';
      if (!this._altBufferIsActive) {
        element.style.width = `${Math.round((decoration.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`;
        element.style.height = `${(decoration.options.height || 1) * this._renderService.dimensions.css.cell.height}px`;
        element.style.top = `${line * this._renderService.dimensions.css.cell.height}px`;
        element.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
      }
      decoration.onRenderEmitter.fire(element);
    }
  }

  private _refreshXPosition(decoration: IInternalDecoration, element: HTMLElement | undefined = decoration.element): void {
    if (!element) {
      return;
    }
    const x = decoration.options.x ?? 0;
    if ((decoration.options.anchor || 'left') === 'right') {
      element.style.right = x ? `${x * this._renderService.dimensions.css.cell.width}px` : '';
    } else {
      element.style.left = x ? `${x * this._renderService.dimensions.css.cell.width}px` : '';
    }
  }

  private _removeDecoration(decoration: IInternalDecoration): void {
    this._decorationElements.get(decoration)?.remove();
    this._decorationElements.delete(decoration);
    decoration.dispose();
  }
}
