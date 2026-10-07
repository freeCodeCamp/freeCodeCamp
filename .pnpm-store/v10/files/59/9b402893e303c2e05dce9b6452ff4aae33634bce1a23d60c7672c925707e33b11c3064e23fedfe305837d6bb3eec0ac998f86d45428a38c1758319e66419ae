/**
 * Copyright (c) 2022 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IBufferRange, ILink } from 'browser/Types';
import { ILinkProvider } from 'browser/services/Services';
import { CellData } from 'common/buffer/CellData';
import { IBufferService, IOptionsService, IOscLinkService } from 'common/services/Services';

export class OscLinkProvider implements ILinkProvider {
  constructor(
    @IBufferService private readonly _bufferService: IBufferService,
    @IOptionsService private readonly _optionsService: IOptionsService,
    @IOscLinkService private readonly _oscLinkService: IOscLinkService
  ) {
  }

  public provideLinks(y: number, callback: (links: ILink[] | undefined) => void): void {
    const line = this._bufferService.buffer.lines.get(y - 1);
    if (!line) {
      callback(undefined);
      return;
    }

    const result: ILink[] = [];
    const linkHandler = this._optionsService.rawOptions.linkHandler;
    const cell = new CellData();
    const lineLength = line.getTrimmedLength();
    let currentLinkId = -1;
    let currentStart = -1;
    let finishLink = false;
    for (let x = 0; x < lineLength; x++) {
      // Minor optimization, only check for content if there isn't a link in case the link ends with
      // a null cell
      if (currentStart === -1 && !line.hasContent(x)) {
        continue;
      }

      line.loadCell(x, cell);
      if (cell.hasExtendedAttrs() && cell.extended.urlId) {
        if (currentStart === -1) {
          currentStart = x;
          currentLinkId = cell.extended.urlId;
          continue;
        } else {
          finishLink = cell.extended.urlId !== currentLinkId;
        }
      } else {
        if (currentStart !== -1) {
          finishLink = true;
        }
      }

      if (finishLink || (currentStart !== -1 && x === lineLength - 1)) {
        const text = this._oscLinkService.getLinkData(currentLinkId)?.uri;
        if (text) {
          // These ranges are 1-based
          const range: IBufferRange = {
            start: {
              x: currentStart + 1,
              y
            },
            end: {
              // Offset end x if it's a link that ends on the last cell in the line
              x: x + (!finishLink && x === lineLength - 1 ? 1 : 0),
              y
            }
          };

          let ignoreLink = false;
          if (!linkHandler?.allowNonHttpProtocols) {
            try {
              const parsed = new URL(text);
              if (!['http:', 'https:'].includes(parsed.protocol)) {
                ignoreLink = true;
              }
            } catch (e) {
              // Ignore invalid URLs to prevent unexpected behaviors
              ignoreLink = true;
            }
          }

          if (!ignoreLink) {
            // OSC links always use underline and pointer decorations
            result.push({
              text,
              range,
              activate: (e, text) => (linkHandler ? linkHandler.activate(e, text, range) : defaultActivate(e, text)),
              hover: (e, text) => linkHandler?.hover?.(e, text, range),
              leave: (e, text) => linkHandler?.leave?.(e, text, range)
            });
          }
        }
        finishLink = false;

        // Clear link or start a new link if one starts immediately
        if (cell.hasExtendedAttrs() && cell.extended.urlId) {
          currentStart = x;
          currentLinkId = cell.extended.urlId;
        } else {
          currentStart = -1;
          currentLinkId = -1;
        }
      }
    }

    // TODO: Handle fetching and returning other link ranges to underline other links with the same
    //       id
    callback(result);
  }
}

function defaultActivate(e: MouseEvent, uri: string): void {
  const answer = confirm(`Do you want to navigate to ${uri}?\n\nWARNING: This link could potentially be dangerous`);
  if (answer) {
    const newWindow = window.open();
    if (newWindow) {
      try {
        newWindow.opener = null;
      } catch {
        // no-op, Electron can throw
      }
      newWindow.location.href = uri;
    } else {
      console.warn('Opening link blocked as opener could not be cleared');
    }
  }
}
